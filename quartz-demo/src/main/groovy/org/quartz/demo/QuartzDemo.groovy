package org.quartz.demo

import org.quartz.JobDetail
import org.quartz.Scheduler
import org.quartz.SchedulerFactory
import org.quartz.Trigger
import org.quartz.impl.StdSchedulerFactory

import static org.quartz.CronScheduleBuilder.cronSchedule
import static org.quartz.JobBuilder.newJob
import static org.quartz.TriggerBuilder.newTrigger

class QuartzDemo {

    private void run() {
        SchedulerFactory sf = new StdSchedulerFactory()
        Scheduler scheduler = sf.getScheduler()

        JobDetail job = newJob(Cat.class).withIdentity("web service 1", "ws").build();
        Trigger trigger = newTrigger().withIdentity("every_3_seconds", "ws").withSchedule(cronSchedule("0/3 * * * * ?")).build();

        scheduler.scheduleJob(job, trigger)

        scheduler.start()

        try {
            // give some time for the scheduler to do it
            Thread.sleep(10L * 1000L)

        } catch (Exception e) {

        }
        scheduler.shutdown(true)
    }

    static void main (String[] args){
        QuartzDemo demo = new QuartzDemo()
        demo.run()
    }
}
