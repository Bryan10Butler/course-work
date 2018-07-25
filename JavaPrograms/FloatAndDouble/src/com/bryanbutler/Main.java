package com.bryanbutler;

public class Main {

    public static void main(String[] args) {
	int myIntValue = 5;
	//float cast
	float myFloatValueCast = (float) 5.4;
	float myFloatValue = 5.4f;
	double myDoubleValue = 5.d;

        System.out.println("myIntValue = " + myIntValue);
        System.out.println("myFloatValue = " + myFloatValue);
        System.out.println("myDoubleValue = " + myDoubleValue);

        double numberOfPounds = 200d;
        double convertedKilo = numberOfPounds * 0.45359237d;
        System.out.println("Kilograms = " + convertedKilo);

    }
}
