package com.atguigu.factory.simplefactory.pizzastore.pizza;

/**
 * @Author liming
 * @Date 2023/11/14 8:42
 * @Description
 **/
public class CheesePizza extends Pizza{
    @Override
    public void prepare() {
        System.out.println("给制作奶酪披萨准备原材料");
    }
}
