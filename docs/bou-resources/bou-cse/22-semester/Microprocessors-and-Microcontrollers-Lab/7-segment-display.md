# 7 Segment Display with Arduino (Common Cathode)

![7 Segment Display with Arduino (Common Cathode)](https://res.cloudinary.com/zopgecx6/image/upload/v1790616804/Arduino_Uno_-_Seven_segment_Display_Common_Cathode_alhakm.gif)

!!! info "TinkerCad project link" 

    [TinkerCad Link: ](https://www.tinkercad.com/things/4bS6YYJgcq8-arduino-uno-seven-segment-display-common-cathode)

### Seven Segment Digits
![Seven Segment Digits](https://media.geeksforgeeks.org/wp-content/uploads/20200413202916/Untitled-Diagram-237.png)


```cpp
/* 
   Pins used: Arduino 2 to 9
*/
byte pin[] = {2, 3, 4, 5, 6, 7, 8, 9}; // Arduino pin array
 
// Corrected binary patterns for a Common Cathode display (1 = ON, 0 = OFF)
int number[10][8] = {
  {1, 1, 1, 1, 1, 1, 0, 0}, // 0
  {0, 1, 1, 0, 0, 0, 0, 0}, // 1
  {1, 1, 0, 1, 1, 0, 1, 0}, // 2
  {1, 1, 1, 1, 0, 0, 1, 0}, // 3
  {0, 1, 1, 0, 0, 1, 1, 0}, // 4
  {1, 0, 1, 1, 0, 1, 1, 0}, // 5
  {1, 0, 1, 1, 1, 1, 1, 0}, // 6
  {1, 1, 1, 0, 0, 0, 0, 0}, // 7
  {1, 1, 1, 1, 1, 1, 1, 0}, // 8
  {1, 1, 1, 1, 0, 1, 1, 0}  // 9
};
 
void setup() {
  for (byte a = 0; a < 8; a++) {
    pinMode(pin[a], OUTPUT); // Define output pins
  }
}
 
void loop() {
  for (int a = 0; a < 10; a++) { // Loops through all 10 digits (0-9)
    for (int b = 0; b < 8; b++) {
      digitalWrite(pin[b], number[a][b]); // Display numbers
    }
    delay(1000); // Wait 1 second before switching numbers
  }
}
```

<iframe width="100%" height="400" src="https://www.youtube.com/embed/QM-47f5WF-4" title="Arduino Uno   Seven segment Display Common Cathode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>