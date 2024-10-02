/* ###
 * IP: Apache License 2.0 with LLVM Exceptions
 */
/* ----------------------------------------------------------------------------
 * This file was automatically generated by SWIG (https://www.swig.org).
 * Version 4.1.1
 *
 * Do not make changes to this file unless you know what you are doing - modify
 * the SWIG interface file instead.
 * ----------------------------------------------------------------------------- */

package SWIG;

public class SBLanguageRuntime {
  private transient long swigCPtr;
  protected transient boolean swigCMemOwn;

  protected SBLanguageRuntime(long cPtr, boolean cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = cPtr;
  }

  protected static long getCPtr(SBLanguageRuntime obj) {
    return (obj == null) ? 0 : obj.swigCPtr;
  }

  protected static long swigRelease(SBLanguageRuntime obj) {
    long ptr = 0;
    if (obj != null) {
      if (!obj.swigCMemOwn)
        throw new RuntimeException("Cannot release ownership as memory is not owned");
      ptr = obj.swigCPtr;
      obj.swigCMemOwn = false;
      obj.delete();
    }
    return ptr;
  }

  @SuppressWarnings("deprecation")
  protected void finalize() {
    delete();
  }

  public synchronized void delete() {
    if (swigCPtr != 0) {
      if (swigCMemOwn) {
        swigCMemOwn = false;
        lldbJNI.delete_SBLanguageRuntime(swigCPtr);
      }
      swigCPtr = 0;
    }
  }

  public static LanguageType GetLanguageTypeFromString(String string) {
    return LanguageType.swigToEnum(lldbJNI.SBLanguageRuntime_GetLanguageTypeFromString(string));
  }

  public static String GetNameForLanguageType(LanguageType language) {
    return lldbJNI.SBLanguageRuntime_GetNameForLanguageType(language.swigValue());
  }

  public SBLanguageRuntime() {
    this(lldbJNI.new_SBLanguageRuntime(), true);
  }

}
