package com.atguigu.uml.aggregation;

/**
 * @Author liming
 * @Date 2023/11/10 12:34
 * @Description
 **/
public class Computer {
    private Mouse mouse;  //鼠标可以和computer分离
    private Moniter moniter;  //显示器可以和computer分离
    public void setMouse(Mouse mouse) {
        this.mouse = mouse;
    }
    public void setMoniter(Moniter moniter) {
        this.moniter = moniter;
    }
}
