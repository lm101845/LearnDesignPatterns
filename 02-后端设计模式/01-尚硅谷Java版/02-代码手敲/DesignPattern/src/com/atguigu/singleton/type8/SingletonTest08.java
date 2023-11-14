package com.atguigu.singleton.type8;

/**
 * @Author liming
 * @Date 2023/11/14 8:23
 * @Description
 **/
public class SingletonTest08 {
    public static void main(String[] args) {
        Singleton instance = Singleton.INSTANCE;
        Singleton instance2 = Singleton.INSTANCE;
        System.out.println(instance.hashCode());
        System.out.println(instance2.hashCode());
        instance.sayOK();
    }
}

//使用枚举可以实现单例, 推荐使用
enum Singleton {
    INSTANCE;  //属性
    public void sayOK() {
        System.out.println("ok~");
    }
}