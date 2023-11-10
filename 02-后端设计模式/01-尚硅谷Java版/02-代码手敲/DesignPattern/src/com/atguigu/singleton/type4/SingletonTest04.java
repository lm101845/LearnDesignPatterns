package com.atguigu.singleton.type4;

/**
 * @Author liming
 * @Date 2023/11/10 17:49
 * @Description
 **/

/**
 * 优缺点说明：
 * 1) 解决了 线程安全问题
 * 2) 效率太低了，每个线程在想获得类的实例时候，执行 getInstance()方法都要进行同步。而其实这个方法只执行
 * 一次实例化代码就够了，后面的想获得该类实例，直接 return 就行了。 方法进行同步效率太低
 * 3) 结论：在实际开发中， 不推荐使用这种方式
 */
public class SingletonTest04 {
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
                instance = new Singleton();
            }
            return instance;
        }
    }
}
