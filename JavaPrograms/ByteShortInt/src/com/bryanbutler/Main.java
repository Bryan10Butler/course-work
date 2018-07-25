package com.bryanbutler;

public class Main {

    public static void main(String[] args) {

    //int has a width of 32
	int myMinValue = -2_147_483_648;
	int myMaxValue = 2_147_483_647;

	//byte has a width of 8
	byte myByteValue = -128;

	//short has a width of 16
	short myShortValue = 32767;

	//long has a width of 64
	long myLongValue = 100L;

	byte byteBryan = 50;
	short shortBryan = 1000;
	int intBryan = 10;
	long bryanLong = (((byteBryan+shortBryan+intBryan)*10) + 50000);
	long test = 50000 + 10L * (byteBryan+shortBryan+intBryan);

        System.out.println(bryanLong);
		System.out.println(test);
    }
}
