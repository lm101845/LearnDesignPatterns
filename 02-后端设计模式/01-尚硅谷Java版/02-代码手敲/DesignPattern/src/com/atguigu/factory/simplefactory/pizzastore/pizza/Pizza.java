package com.atguigu.factory.simplefactory.pizzastore.pizza;

/**
 * @Author liming
 * @Date 2023/11/14 8:40
 * @Description
 **/

//将pizza做成抽象的
public abstract class Pizza {
    protected String name;  //名字

    public Pizza() {
    }

    //准备原材料，不同的披萨不一样，因此做成抽象方法
    public abstract void prepare();

    //烘烤
    public void bake() {
        System.out.println(this.name + " baking;");
    }

    //切割
    public void cut() {
        System.out.println(this.name + " cutting;");
    }

    //打包
    public void box() {
        System.out.println(this.name + " boxing;");
    }

    public void setName(String name) {
        this.name = name;
    }
}
