package com.atguigu.singleton.type3;

/**
 * @Author liming
 * @Date 2023/11/10 17:49
 * @Description
 **/

/**
 * 优缺点说明：
 * 1) 起到了 Lazy Loading 的效果，但是只能在单线程下使用。
 * 2) 如果在多线程下，一个线程进入了 if (singleton == null)判断语句块，还未来得及往下执行，另一个线程也通过
 * 了这个判断语句，这时便会 产生多个实例。所以在多线程环境下不可使用这种方式
 * 3) 结论：在实际开发中， 不要使用这种方式.
 */
public class SingletonTest03 {
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
        //即懒汉式
        public static Singleton getInstance(){
            if(instance == null){
                instance = new Singleton();
            }
            return instance;
        }
    }
}
