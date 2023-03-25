package com.atguigu.principle.segregation.improve;

/**
 * @Author liming
 * @Date 2023/3/25 20:16
 **/
public class Segregation1 {
    public static void main(String[] args) {
        A a = new A();
        a.depend1(new B());   //A类通过接口去依赖B这个类
        a.depend2(new B());
        a.depend3(new B());

        C c = new C();   //C类通过接口去依赖(使用)D类
        c.depend1(new D());
        c.depend4(new D());
        c.depend5(new D());
    }
}

//接口1
interface Interface1 {
    void operation1();
}

//接口2
interface Interface2 {
    void operation2();
    void operation3();
}

//接口3
interface Interface3 {
    void operation4();
    void operation5();
}

class B implements Interface1,Interface2{

    @Override
    public void operation1() {
        System.out.println("B实现了operation1");
    }

    @Override
    public void operation2() {
        System.out.println("B实现了operation2");

    }

    @Override
    public void operation3() {
        System.out.println("B实现了operation3");

    }
}

class D implements Interface1,Interface3{

    @Override
    public void operation1() {
        System.out.println("D实现了operation1");
    }

    @Override
    public void operation4() {
        System.out.println("D实现了operation4");

    }

    @Override
    public void operation5() {
        System.out.println("D实现了operation5");

    }
}

//A类通过接口Interface1依赖(使用)B类，但是只会用到1,2,3方法
class A{
    public void depend1(Interface1 i){

        i.operation1();
    }

    public void depend2(Interface2 i){

        i.operation2();
    }

    public void depend3(Interface2 i){

        i.operation3();
    }
}

//C类通过接口Interface1依赖(使用)B类，但是只会用到1,4,5方法
class C{
    public void depend1(Interface1 i){

        i.operation1();
    }

    public void depend4(Interface3 i){

        i.operation4();
    }

    public void depend5(Interface3 i){

        i.operation5();
    }
}