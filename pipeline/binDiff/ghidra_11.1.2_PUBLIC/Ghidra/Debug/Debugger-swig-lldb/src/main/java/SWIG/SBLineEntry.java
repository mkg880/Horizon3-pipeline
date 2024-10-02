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

public class SBLineEntry {
  private transient long swigCPtr;
  protected transient boolean swigCMemOwn;

  protected SBLineEntry(long cPtr, boolean cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = cPtr;
  }

  protected static long getCPtr(SBLineEntry obj) {
    return (obj == null) ? 0 : obj.swigCPtr;
  }

  protected static long swigRelease(SBLineEntry obj) {
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
        lldbJNI.delete_SBLineEntry(swigCPtr);
      }
      swigCPtr = 0;
    }
  }

  public SBLineEntry() {
    this(lldbJNI.new_SBLineEntry__SWIG_0(), true);
  }

  public SBLineEntry(SBLineEntry rhs) {
    this(lldbJNI.new_SBLineEntry__SWIG_1(SBLineEntry.getCPtr(rhs), rhs), true);
  }

  public SBAddress GetStartAddress() {
    return new SBAddress(lldbJNI.SBLineEntry_GetStartAddress(swigCPtr, this), true);
  }

  public SBAddress GetEndAddress() {
    return new SBAddress(lldbJNI.SBLineEntry_GetEndAddress(swigCPtr, this), true);
  }

  public boolean IsValid() {
    return lldbJNI.SBLineEntry_IsValid(swigCPtr, this);
  }

  public SBFileSpec GetFileSpec() {
    return new SBFileSpec(lldbJNI.SBLineEntry_GetFileSpec(swigCPtr, this), true);
  }

  public long GetLine() {
    return lldbJNI.SBLineEntry_GetLine(swigCPtr, this);
  }

  public long GetColumn() {
    return lldbJNI.SBLineEntry_GetColumn(swigCPtr, this);
  }

  public void SetFileSpec(SBFileSpec filespec) {
    lldbJNI.SBLineEntry_SetFileSpec(swigCPtr, this, SBFileSpec.getCPtr(filespec), filespec);
  }

  public void SetLine(long line) {
    lldbJNI.SBLineEntry_SetLine(swigCPtr, this, line);
  }

  public void SetColumn(long column) {
    lldbJNI.SBLineEntry_SetColumn(swigCPtr, this, column);
  }

  public boolean GetDescription(SBStream description) {
    return lldbJNI.SBLineEntry_GetDescription(swigCPtr, this, SBStream.getCPtr(description), description);
  }

  public String __repr__() {
    return lldbJNI.SBLineEntry___repr__(swigCPtr, this);
  }

}
