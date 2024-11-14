import aws from "aws-sdk";
import fs, { write } from "fs";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-2",
});

function uploadToS3(file, folder, callback) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: "bindifffiles",
    Key: folder + file.originalname,
    Body: fileStream,
  };
  s3.upload(uploadParams, callback);
}

async function uploadFile(req, res) {
  console.log(req.body.folder);
  try {
    uploadToS3(req.file, req.body.folder, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Failed to upload file");
      }
      res.status(200).send("File uploaded successfully");
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Failed to upload file");
  }
}

async function createFolder(req, res) {
  var now = new Date();
  const date =
    now.getUTCMonth() +
    1 +
    "-" +
    now.getUTCDate() +
    "-" +
    now.getUTCFullYear() +
    "(" +
    (now.getUTCHours() < 10 ? "0" + now.getUTCHours() : now.getUTCHours()) +
    ":" +
    (now.getUTCMinutes() < 10
      ? "0" + now.getUTCMinutes()
      : now.getUTCMinutes()) +
    ":" +
    (now.getUTCSeconds() < 10
      ? "0" + now.getUTCSeconds()
      : now.getUTCSeconds()) +
    ")/";
  const params = {
    Bucket: "bindifffiles",
    Key: date,
  };
  s3.putObject(params).promise();
  return res.status(200).json({
    message: "Folder created successfully",
    folder: date,
  });
}

async function downloadFile(req, res) {
  console.log(req.body);
  const params = {
    Bucket: "reports407",
    Key: req.query.url,
  };
  s3.getObject(params, function (err, data) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.setHeader(
        "Content-disposition",
        `attachment; filename=${req.body.url}`,
      );
      res.setHeader("Content-type", "application/pdf");
      res.send(data.Body);
    }
  });
}

async function delete_file(req, res) {
  console.log(req.body);
  const params = {
    Bucket: "reports407",
    Key: req.body.url,
  };
  s3.deleteObject(params, function (err, data) {
    if (err)
      console.log(err, err.stack); // error
    else console.log(); // deleted
  });

  return res.status(200).json({ msg: "Wassup gang" });
}
export { uploadFile, createFolder, downloadFile, delete_file };