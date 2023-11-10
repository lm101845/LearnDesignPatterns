package com.atguigu.singleton.type7;

/**
 * @Author liming
 * @Date 2023/11/10 17:49
 * @Description
 **/

/**
 * 静态内部类
 */


public class SingletonTest07 {
    public static void main(String[] args) {
        //测试
        Singleton instance1 = Singleton.getInstance();
        Singleton instance2 = Singleton.getInstance();
        System.out.println(instance1 == instance2);
        System.out.println("instance1.hashCode=" + instance1.hashCode());
        System.out.println("instance2.hashCode=" + instance2.hashCode());
    }

    static class Singleton{
        //构造器私有化
        private static volatile Singleton instance;

        private Singleton(){}

        //写一个静态内部类，该类中有一个静态属性Singleton
        private static class SingletonInstance{
            private static final Singleton INSTANCE = new Singleton();
        }

        //提供一个静态的公有方法，直接返回SingletonInstance.INSTANCE
        public static  Singleton getInstance(){
            return SingletonInstance.INSTANCE;
        }
    }
}
