



#include "ros/ros.h"

#include "geometry_msgs/Twist.h" 
ros::Publisher velocity_publisher;

// method to move robot stright forward

void move(double speed, double distance, bool isForward );



int main(int argc, char **argv)

{

// initiate new node name ........(robot_cleaner)
ros::init(argc, argv,"robot_cleaner");
ros::NodeHandle n;

velocity_publisher = n.advertise<geometry_msgs::Twist>("/turtle1/cmd_vel",10);
move (2.0, 5.0, 1);

}

void move(double speed , double distance , bool isForward) {

geometry_msgs::Twist vel_msg;

//distance = speed *time

//set a rendom linear velocity in x axis
if (isForward)
    vel_msg.linear.x = abs(speed);
else
    vel_msg.linear.x = -abs(speed);

vel_msg.linear.y=0;
vel_msg.linear.z=0;

// set a rendom angular velocity in y axis
vel_msg.angular.x=0;
vel_msg.angular.y=0;
vel_msg.angular.z=0;

// t0 current time

double t0 = ros::Time::now().toSec();
double current_distance=0;
ros::Rate loop_rate(10);
do{
    velocity_publisher.publish(vel_msg);
    double t1 = ros::Time::now().toSec();
    current_distance = speed * (t1-t0);
    ros::spinOnce();
    loop_rate.sleep();
}while (current_distance < distance);
vel_msg.linear.x=0;
velocity_publisher.publish(vel_msg);

// loop 
// publish the velocity 
//estemate the current_distance= speed*(t1-t0)
// current_distance moved by robot <= distance




}
