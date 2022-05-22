#!/usr/bin/env python

# Original Code: https://github.com/markwsilliman/turtlebot/blob/master/goforward_and_avoid_obstacle.py
# TurtleBot must have minimal.launch & amcl_demo.launch running prior to starting this script.


import rospy
from move_base_msgs.msg import MoveBaseAction, MoveBaseGoal
import actionlib
from actionlib_msgs.msg import GoalStatus
from geometry_msgs.msg import Pose, Point, Quaternion, PoseWithCovarianceStamped
from gazebo_msgs.srv import DeleteModel
from gazebo_msgs.msg import ModelStates
from nav_msgs.msg import Odometry
#from objects import all_objects, bins
import numpy as np
import math

class Move():
    def __init__(self):
        rospy.init_node('move_bot')

       
        # tell the action client that we want to spin a thread by default
        self.move_base = actionlib.SimpleActionClient("move_base", MoveBaseAction)
        rospy.loginfo("wait for the action server to come up")

        # allow up to 5 seconds for the action server to come up
        self.move_base.wait_for_server(rospy.Duration(5))
        self.picked = False

	 # Robot pose
        self.robot_pose = Point(0, 0, 0)
        positions =  Point(2, 1, 2)
        

        # what to do if shut down (e.g. ctrl + C or failure)
        rospy.on_shutdown(self.shutdown)

        rospy.loginfo("init move node")
        self.update_pose()


    

    def update_pose(self):
        self.robot_pose = rospy.wait_for_message('/amcl_pose', PoseWithCovarianceStamped).pose.pose.position
                    
        
    def goto(self, goal_pose):
       
        goal = MoveBaseGoal()
        goal.target_pose.pose = rospy.wait_for_message('/amcl_pose', PoseWithCovarianceStamped).pose.pose
        goal.target_pose.header.frame_id = 'map'
        goal.target_pose.header.stamp = rospy.Time.now()
        goal.target_pose.pose.position = goal_pose

        # Start moving
        print 'sent goal signal'
        self.move_base.send_goal(goal)

        # Allow TurtleBot up to 200 seconds to complete task
       
    def shutdown(self):
        rospy.loginfo("Stop")
        self.move_base.cancel_goal()

    def run(self):
        r = rospy.Rate(100)  # 100hz
        while not rospy.is_shutdown():
            if not self.reached:
                self.update_pose()
            r.sleep()

if __name__ == '__main__':
    try:
        Move().run()
    except rospy.ROSInterruptException:
        rospy.loginfo("Exception thrown")
