

```java

import javax.swing.*;
import java.awt.*;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame(); // creates a frame

        frame.setSize(420, 420); // sets the x-dimension, and y-dimension of frame;
        frame.setVisible(true); // make the frame visible
        frame.setTitle("JFRAME Tutorial"); // title of the frame
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // X button এ চাপলে fully terminate হয়ে যাবে।

        frame.setBounds(200, 300, 400, 400); // (int x, int y, int width, int height)

//        ===== replacing java logo with ours
        ImageIcon image = new ImageIcon("icon.png"); // image টা অবশ্যই Project Root এ রাখতে হবে। src বা অন্য কোন folder এ নয়।
        frame.setIconImage(image.getImage());
//        =====
//        ===== change background of the window / frame
        frame.getContentPane().setBackground(Color.green); // default color
        frame.getContentPane().setBackground(new Color(0xED9DED)); // adding custom HEX color
        frame.getContentPane().setBackground(new Color(50, 116, 123)); // adding custom rgb color
//        ===


    }
}


```