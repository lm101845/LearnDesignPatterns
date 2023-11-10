package com.atguigu.singleton.type5;

/**
 * @Author liming
 * @Date 2023/11/10 17:49
 * @Description
 **/


public class SingletonTest05 {
    public static void main(String[] args) {
        //测试
        Singleton instance1 = Singleton.getInstance();
        Singleton instance2 = Singleton.getInstance();
        System.out.println(instance1 == instance2);
        System.out.println("instance1.hashCode=" + instance1.hashCode());
        System.out.println("instance2.hashCode=" + instance2.hashCode());
    }

    static class Singleton{
        private static Singleton instance;
        private Singleton(){}

        //提供一个静态的公有方法，当使用到该方法时，才去创建instance
        //即懒汉式2
        //加入了同步代码，解决线程不安全问题
        public static synchronized Singleton getInstance(){
            if(instance == null){
                //在同步代码里面再加上一个if判断语句就可以避免线程安全的问题，但是还是可能因为指令重排序造成空指针异常
                //这种写法直接不能用！！是错的
                synchronized (Singleton.class){
                    instance = new Singleton();
                }
            }
            return instance;
        }
    }
}
