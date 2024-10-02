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

public final class ByteOrder {
  public final static ByteOrder eByteOrderInvalid = new ByteOrder("eByteOrderInvalid", lldbJNI.eByteOrderInvalid_get());
  public final static ByteOrder eByteOrderBig = new ByteOrder("eByteOrderBig", lldbJNI.eByteOrderBig_get());
  public final static ByteOrder eByteOrderPDP = new ByteOrder("eByteOrderPDP", lldbJNI.eByteOrderPDP_get());
  public final static ByteOrder eByteOrderLittle = new ByteOrder("eByteOrderLittle", lldbJNI.eByteOrderLittle_get());

  public final int swigValue() {
    return swigValue;
  }

  public String toString() {
    return swigName;
  }

  public static ByteOrder swigToEnum(int swigValue) {
    if (swigValue < swigValues.length && swigValue >= 0 && swigValues[swigValue].swigValue == swigValue)
      return swigValues[swigValue];
    for (int i = 0; i < swigValues.length; i++)
      if (swigValues[i].swigValue == swigValue)
        return swigValues[i];
    throw new IllegalArgumentException("No enum " + ByteOrder.class + " with value " + swigValue);
  }

  private ByteOrder(String swigName) {
    this.swigName = swigName;
    this.swigValue = swigNext++;
  }

  private ByteOrder(String swigName, int swigValue) {
    this.swigName = swigName;
    this.swigValue = swigValue;
    swigNext = swigValue+1;
  }

  private ByteOrder(String swigName, ByteOrder swigEnum) {
    this.swigName = swigName;
    this.swigValue = swigEnum.swigValue;
    swigNext = this.swigValue+1;
  }

  private static ByteOrder[] swigValues = { eByteOrderInvalid, eByteOrderBig, eByteOrderPDP, eByteOrderLittle };
  private static int swigNext = 0;
  private final int swigValue;
  private final String swigName;
}

