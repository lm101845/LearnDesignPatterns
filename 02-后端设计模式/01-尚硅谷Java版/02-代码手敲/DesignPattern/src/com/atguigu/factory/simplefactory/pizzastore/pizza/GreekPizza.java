package com.atguigu.factory.simplefactory.pizzastore.pizza;

/**
 * @Author liming
 * @Date 2023/11/14 8:43
 * @Description
 **/
public class GreekPizza extends Pizza{
    @Override
    public void prepare() {
        System.out.println("给制作希腊披萨准备原材料");
    }
}
