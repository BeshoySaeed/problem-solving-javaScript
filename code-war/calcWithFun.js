function zero(opera) {
  if (opera) {
    return opera(0);
  } else {
    return 0;
  }
}
function zero(opera) {
  if (opera) {
    return opera(0);
  } else {
    return 0;
  }
}
function one(opera) {
  if (opera) {
    return opera(1);
  } else {
    return 1;
  }
}
function two(opera) {
  if (opera) {
    return opera(2);
  } else {
    return 2;
  }
}
function three(opera) {
  if (opera) {
    return opera(3);
  } else {
    return 3;
  }
}
function four(opera) {
  if (opera) {
    return opera(4);
  } else {
    return 4;
  }
}
function five(five) {
  if (opera) {
    return opera(5);
  } else {
    return 5;
  }
}
function six(five) {
  if (opera) {
    return opera(6);
  } else {
    return 6;
  }
}
function seven(five) {
  if (opera) {
    return opera(7);
  } else {
    return 7;
  }
}
function eight(five) {
  if (opera) {
    return opera(8);
  } else {
    return 8;
  }
}
function nine(five) {
  if (opera) {
    return opera(9);
  } else {
    return 9;
  }
}
function plus(rightOperand) {
  return function (leftOperand) {
    return leftOperand + rightOperand;
  };
}

function minus(rightOperand) {
  return function (leftOperand) {
    return leftOperand - rightOperand;
  };
}

function times(rightOperand) {
  return function (leftOperand) {
    return leftOperand * rightOperand;
  };
}

function dividedBy(rightOperand) {
  return function (leftOperand) {
    return Math.floor(leftOperand / rightOperand);
  };
}
