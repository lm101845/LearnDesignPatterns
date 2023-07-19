package com.atguigu.principle.inversion.improve;

public class DependencyPass {

    public static void main(String[] args) {
        ChangHong changHong = new ChangHong();
        //����1��
		//OpenAndClose openAndClose = new OpenAndClose();
		//openAndClose.open(changHong);

        //����2��ͨ��������������������
		//OpenAndClose openAndClose = new OpenAndClose(changHong);
		//openAndClose.open();

        //����3��ͨ��setter����������������
        OpenAndClose openAndClose = new OpenAndClose();
        openAndClose.setTv(changHong);
        openAndClose.open();

    }

}

// ��ʽ1�� ͨ���ӿڴ���ʵ������
// ���صĽӿ�
//interface IOpenAndClose {
//    public void open(ITV tv); //���󷽷�,���սӿ�
//}
//
//interface ITV { //ITV�ӿ�
//    public void play();
//}
//
//class ChangHong implements ITV {
//
//    @Override
//    public void play() {
//        System.out.println("������ӻ�����");
//    }
//
//}
//
//// ʵ�ֽӿ�
//class OpenAndClose implements IOpenAndClose {
//    public void open(ITV tv) {
//        tv.play();
//    }
//}

// ��ʽ2: ͨ�����췽����������
//interface IOpenAndClose {
//    public void open(); //���󷽷�
//}
//
//interface ITV { //ITV�ӿ�
//    public void play();
//}
//
//class OpenAndClose implements IOpenAndClose {
//    public ITV tv; //��Ա
//
//    public OpenAndClose(ITV tv) { //������
//        this.tv = tv;
//    }
//
//    public void open() {
//        this.tv.play();
//    }
//}


// ��ʽ3 , ͨ��setter��������
interface IOpenAndClose {
	public void open(); // ���󷽷�

	public void setTv(ITV tv);
}

interface ITV { // ITV�ӿ�
	public void play();
}

class OpenAndClose implements IOpenAndClose {
	private ITV tv;

	public void setTv(ITV tv) {
		this.tv = tv;
	}

	public void open() {
		this.tv.play();
	}
}

class ChangHong implements ITV {

	@Override
	public void play() {
		System.out.println("������ӻ�����");
	}

}