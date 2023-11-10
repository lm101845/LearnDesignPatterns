package com.atguigu.singleton.type6;

/**
 * @Author liming
 * @Date 2023/11/10 17:49
 * @Description
 **/

/**
 * 双重检查方式
 * 这个代码的工作原理是：首先检查instance是否为null。如果是null，则进入同步块，再次检查instance是否为null。
 * 如果instance仍然是null，则创建Singleton的实例。由于第一次检查和第二次检查之间的空隙，这个模式被称为双重检查模式。
 *
 * 需要注意的是volatile关键字的使用，它保证了变量的可见性。如果instance不是volatile，那么在多线程环境下就可能会出现问题。
 * 如果一个线程在第一次检查instance为null后，被暂停了，
 * 然后另一个线程创建了Singleton的实例，那么当第一个线程再次运行时，它可能会错误的认为instance还是null，
 * 然后创建另一个实例。但是，由于volatile关键字的存在，这种情况就不会发生，
 * 因为volatile保证了变量的可见性，也就是说一个线程对instance的修改对其他线程来说是立即可见的。
 */

/**
 *在多线程环境下，一个线程对共享变量的操作对其他线程是不可见的。
 *Java提供了volatile来保证可见性，当一个变量被volatile修饰后，表示着线程本地内存无效，
 *当一个线程修改共享变量后他会立即被更新到主内存中，其他线程读取共享变量时，会直接从主内存中读取。
 *当然，synchronize和Lock都可以保证可见性。
 *synchronized和Lock能保证同一时刻只有一个线程获取锁然后执行同步代码，
 *并且在释放锁之前会将对变量的修改刷新到主存当中。因此可以保证可见性。
 */
public class SingletonTest06 {
    public static void main(String[] args) {
        //测试
        Singleton instance1 = Singleton.getInstance();
        Singleton instance2 = Singleton.getInstance();
        System.out.println(instance1 == instance2);
        System.out.println("instance1.hashCode=" + instance1.hashCode());
        System.out.println("instance2.hashCode=" + instance2.hashCode());
    }

    static class Singleton{
        private static volatile Singleton instance;
        //volatile是为了防止指令重排，同步数据访问
        //这里volatile主要是为了防止指令重排，new 一个对象用字节码指令分析是三条指令，这三条指令会发生重排序，
        // 引用指向了分配的地址但对象还未创建 导致判空校验不准确
        private Singleton(){}

        //提供一个静态的公有方法，加入双重检查代码，解决线程安全问题，同时解决懒加载问题
        public static  Singleton getInstance(){
            if(instance == null){
                synchronized (Singleton.class){
                    if(instance == null){
                        instance = new Singleton();
                    }
                }
            }
            return instance;
        }
    }
}
