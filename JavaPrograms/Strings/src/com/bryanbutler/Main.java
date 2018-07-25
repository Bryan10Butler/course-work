package com.bryanbutler;

public class Main {

    public static void main(String[] args) {
        double myFirstValue = 20d;
        double mySecondValue = 80d;
        double resultOne = (myFirstValue + mySecondValue) * 25;
        double resultTwoRemainder = resultOne % 40;
        if (resultTwoRemainder <= 20) {
            System.out.println("Total was over the limit");
        }
    }
}
