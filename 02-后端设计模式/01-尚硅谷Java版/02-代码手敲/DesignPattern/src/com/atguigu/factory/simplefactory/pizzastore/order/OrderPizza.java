package com.atguigu.factory.simplefactory.pizzastore.order;

import com.atguigu.factory.simplefactory.pizzastore.pizza.GreekPizza;
import com.atguigu.factory.simplefactory.pizzastore.pizza.Pizza;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * @Author liming
 * @Date 2023/11/14 8:44
 * @Description
 **/
public class OrderPizza {
    //构造器
    public OrderPizza(){
        Pizza pizza = null;
        String orderType; //订购披萨的类型
        do{
            //orderType = "greek";
            orderType = getType();
            if (orderType.equals("greek")) {
                pizza = new GreekPizza();
                pizza.setName("希腊披萨");
            }else if(orderType.equals("cheese")) {
                pizza = new GreekPizza();
                pizza.setName("奶酪披萨");
            }else if(orderType.equals("pepper")) {
                pizza = new GreekPizza();
                pizza.setName("胡椒披萨");
            }
            //新增了一个胡椒披萨，所以我们要新增一个判断
            else {
                break;
            }
            //输出pizza 制作过程
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
        }while (true);
    }

    //写一个方法，可以获取客户希望订购的披萨种类
    private String getType() {
        try {
            BufferedReader strin = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("input pizza 种类:");
            String str = strin.readLine();
            return str;
        } catch (IOException var3) {
            var3.printStackTrace();
            return "";
        }
    }
}
