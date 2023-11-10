package com.atguigu.uml.dependency;

/**
 * @Author liming
 * @Date 2023/10/22 21:24
 * @Description
 **/
public class PersonServiceBean {
    private PersonDao personDao;

    public PersonServiceBean() {
    }

    public void save(Person person) {
    }

    public IDCard getIDCard(Integer personid) {
        return null;
    }

    public void modify() {
        new Department();
    }
}
