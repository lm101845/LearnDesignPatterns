package com.atguigu.singleton.type2;

/**
 * @Author liming
 * @Date 2023/11/10 17:34
 * @Description
 **/

public class SingletonTest02 {
    public static void main(String[] args) {
        //测试
        Singleton instance1 = Singleton.getInstance();
        Singleton instance2 = Singleton.getInstance();
        System.out.println(instance1 == instance2);
        System.out.println("instance1.hashCode=" + instance1.hashCode());
        System.out.println("instance2.hashCode=" + instance2.hashCode());
    }
}

//饿汉式(静态代码块)
class Singleton{

    //构造器私有化还是要写的
    private Singleton(){

    }

    //在静态代码块中，创建单例对象
    static {
        instance = new Singleton();
    }

    private  static Singleton instance;


    public static Singleton getInstance(){
        return instance;
    }
}

