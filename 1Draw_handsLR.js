// ----=  HANDS  =----
// USING THE GESTURE DETECTORS (check their values in the debug menu)
// detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"

/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}




function drawInteraction(faces, hands) {
  // hands part
  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    // console.log(hand);
    if (showKeypoints) {
      drawConnections(hand)
    }

//start drawing on the hands here

//this code is from the tutorials below

let whatGesture = detectHandGesture(hand)

if (whatGesture == "Pinch") {

  fill(255, 252, 48) //yellow
}
/*
if (hand.movement == "Left") {
  let middleOfHandX = (middleFingerTipX + wristX) / 2;
  let middleOfHandY =  (middleFingerTipY + wristY) / 2;

    let sizeOfEllipse = dist(middleFingerTipX, middleFingerTipY, wristX, wristY); //pixel number between two points

    ellipse(middleOfHandX, middleOfHandY, sizeOfEllipse, sizeOfEllipse); //step in for image 
}

if (hand.movement == "Right") {
  let middleOfHandX = (middleFingerTipX + wristX) / 2;
  let middleOfHandY =  (middleFingerTipY + wristY) / 2;

    let sizeOfEllipse = dist(middleFingerTipX, middleFingerTipY, wristX, wristY); //pixel number between two points

    ellipse(middleOfHandX, middleOfHandY, sizeOfEllipse, sizeOfEllipse); //step in for image 
}
*/

    let thumbTip = hand.thumb_tip;
    let indTip = hand.index_finger_tip;

    let indPip = hand.index_finger_pip;

    let thumbDip = hand.thumb_ip;
    
    let thumbMcp = hand.thumb_mcp;
    let indMcp = hand.index_finger_mcp;
    let middleMcp = hand.middle_finger_mcp;
    let pinkMcp = hand.pinky_finger_mcp;
    
    let wrist = hand.wrist;

    let indThMTx = (thumbTip.x + indMcp.x + indPip.x) /3;
    let indThMTy = (thumbTip.y + indMcp.y + indPip.y) /3;

    let thumbIndTipX = (thumbTip.x + indTip.x) /2;
    let thumbIndTipY = (thumbTip.y + indTip.y) /2;
    
    let thIndX = (thumbTip.x + indTip.x + indMcp.x) /3;
    let thIndY = (thumbTip.y + indTip.y + indMcp.y) /3;
    
    let thThIndX = (thumbTip.x + indTip.x + thumbDip.x) /3;
    let ththIndY = (thumbTip.y + indTip.y + thumbDip.y) /3;


    let midIndMcpX = (indMcp.x + middleMcp.x) /2;
    let midIndMcpY = (indMcp.y + middleMcp.y) /2;

    let palmX = (middleMcp.x + wrist.x) /2;
    let palmY = (middleMcp.y + wrist.y) /2;
    let elbowX = (indMcp.x + thumbMcp.x) /2;
    let elbowY = (indMcp.y + thumbMcp.y) /2;

  //=================================================

    if (hand.handedness === "Right") {



    }

    if (hand.handedness === "Left") {


    }
   //=================================================
  }
  // You can make addtional elements here, but keep the hand drawing inside the for loop. 
  //------------------------------------------------------

}


function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}

// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {
  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 10);
  }
  pop()

}