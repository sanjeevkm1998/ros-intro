#! /usr/bin/env python

import rospy

from sensor_msgs.msg import LaserScan
from geometry_msgs.msg import Twist
pub = None

def clbk_laser(msg):
    regions = {
        'right':  min(min(msg.ranges[0:143]), 10),
        'fright': min(min(msg.ranges[144:287]), 10),
        'front':  min(min(msg.ranges[288:431]), 10),
        'fleft':  min(min(msg.ranges[432:575]), 10),
        'left':   min(min(msg.ranges[576:719]), 10),
    }
    
    take_action(regions)
    #print(msg.ranges[0:719])
    #print(msg.ranges[144:287])
    #print(msg.ranges[288:431])
    #print(msg.ranges[432:575])
    #print(msg.ranges[576:719])
    print("right")
    print(min(msg.ranges[0:143]))
    print("fright")
    print(min(msg.ranges[144:287]))
    print("front")
    print(min(msg.ranges[288:431]))
    print("fleft")
    print(min(msg.ranges[432:575]))
    print("left")
    print(min(msg.ranges[576:719]))
    
def take_action(regions):
    msg = Twist()
    linear_x = 0
    angular_z = 0
    d=1
    state_description = ''
    print(regions)
    if  regions['left'] > d and regions['fleft'] > d and regions['front'] > d and regions['fright'] > d and regions['right'] > d :
        state_description = 'case 1 - nothing'
        linear_x = 0.6
        angular_z = 0
    elif regions['left'] < d and regions['fleft'] > d and regions['front'] > d and regions['fright'] > d and regions['right'] < d :
        state_description = 'case 2 - front'
        linear_x = 0.3
        angular_z = 0
    elif regions['left'] < d and regions['fleft'] < d and regions['front'] > d and regions['fright'] > d and regions['right'] < d :
        state_description = 'case 3 - front'
        linear_x = 0.3
        angular_z = 0
    elif regions['left'] < d and regions['fleft'] > d and regions['front'] > d and regions['fright'] < d and regions['right'] < d :
        state_description = 'case 4 - front'
        linear_x = 0.3
        angular_z = 0
    elif regions['left'] < d and regions['fleft'] < d and regions['front'] > d and regions['fright'] < d and regions['right'] < d :
        state_description = 'case 5 - front'
        linear_x = 0.3
        angular_z = 0
   
    elif regions['left'] < d and regions['fleft'] < d and regions['front'] < d and regions['fright'] > d and regions['right'] > d :
        state_description = 'case 6 - right'
        linear_x = 0
        angular_z = 0.3
    elif regions['left'] < d and regions['fleft'] < d and regions['front'] > d and regions['fright'] > d and regions['right'] > d :
        state_description = 'case 7 - right'
        linear_x = 0
        angular_z = 0.3
    elif regions['left'] < d and regions['fleft'] < d and regions['front'] < d and regions['fright'] < d and regions['right'] > d :
        state_description = 'case 8 - right'
        linear_x = -0.3
        angular_z = 0.3
    elif regions['left'] < d and regions['fleft'] < d and regions['front'] < d and regions['fright'] > d and regions['right'] < d :
        state_description = 'case 9 - right'
        linear_x = 0
        angular_z = 0.3
    elif regions['left'] > d and regions['fleft'] < d and regions['front'] < d and regions['fright'] > d and regions['right'] > d :
        state_description = 'case 10 - right'
        linear_x = 0
        angular_z = 0.3  
    elif regions['left'] < d and regions['fleft'] > d and regions['front'] > d and regions['fright'] > d and regions['right'] > d :
        state_description = 'case 11 - right'
        linear_x = 0
        angular_z = 0.3      
          
        
    elif regions['left'] > d and regions['fleft'] > d and regions['front'] > d and regions['fright'] < d and regions['right'] < d :
        state_description = 'case 12 - left '
        linear_x = 0
        angular_z = -0.3
    elif regions['left'] > d and regions['fleft'] > d and regions['front'] < d and regions['fright'] < d and regions['right'] < d :
        state_description = 'case 13 - left'
        linear_x = 0
        angular_z = -0.3
    elif regions['left'] > d and regions['fleft'] < d and regions['front'] < d and regions['fright'] < d and regions['right'] < d :
        state_description = 'case 14 - left'
        linear_x = 0
        angular_z = -0.3
    elif regions['left'] < d and regions['fleft'] > d and regions['front'] < d and regions['fright'] < d and regions['right'] < d :
        state_description = 'case 15 - left'
        linear_x = 0
        angular_z = -0.3
        
    elif regions['left'] > d and regions['fleft'] > d and regions['front'] < d and regions['fright'] < d and regions['right'] > d :
        state_description = 'case 16 - left'
        linear_x = 0
        angular_z = -0.3
    elif regions['left'] > d and regions['fleft'] < d and regions['front'] < d and regions['fright'] < d and regions['right'] > d :
        state_description = 'case 16 - left'
        linear_x = 0
        angular_z = -0.3        
    elif regions['left'] < d and regions['fleft'] < d and regions['front'] < d and regions['fright'] < d and regions['right'] < d :
        state_description = 'case 17 - left'
        linear_x = 0
        angular_z = -0.3
    elif regions['left'] > d and regions['fleft'] > d and regions['front'] > d and regions['fright'] > d and regions['right'] < d :
        state_description = 'case 19 - left'
        linear_x = 0
        angular_z = -0.3
                   
    elif regions['front'] < 0.6 or regions['fleft'] < 0.6 or regions['fright'] < 0.6 or regions['right'] < 0.6 or regions['left'] < 0.6:
        state_description = 'case 13 - back'
        linear_x = -0.5
        angular_z = -0.8
    else:
        state_description = 'unknown case'
        rospy.loginfo(regions)

    rospy.loginfo(state_description)
    msg.linear.x = linear_x
    msg.angular.z = angular_z
    pub.publish(msg)

def main():
    global pub
    
    rospy.init_node('obstacle_avoid')
    
    pub = rospy.Publisher('/cmd_vel', Twist, queue_size=1)
    
    sub = rospy.Subscriber('/scan', LaserScan, clbk_laser)
    
    rospy.spin()

if __name__ == '__main__':
    main()

