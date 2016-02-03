package org.quartz.demo

import org.quartz.JobDetail
import org.quartz.Scheduler
import org.quartz.SchedulerFactory
import org.quartz.Trigger
import org.quartz.impl.StdSchedulerFactory

import static org.quartz.CronScheduleBuilder.cronSchedule
import static org.quartz.JobBuilder.newJob
import static org.quartz.TriggerBuilder.newTrigger

class CatQuartzDemo {


    private void run() {
        SchedulerFactory sf = new StdSchedulerFactory()
        Scheduler scheduler = sf.getScheduler()

        def cats = [CatEnum.TOM, CatEnum.MEOW, CatEnum.KARABAH]

        cats.each { cat ->
            JobDetail job = newJob(CatPrint.class)
                    .withIdentity(cat.name, "cat")
                    .usingJobData("ascii", cat.ascii)
                    .build();

            Trigger trigger = newTrigger().withIdentity("$cat schedule", "cat").withSchedule(cronSchedule(cat.schedule)).build();
            scheduler.scheduleJob(job, trigger)
            scheduler.start()
        }

        try {
            //give some time for the scheduler to do it
            Thread.sleep(20L * 1000L)
        } catch (Exception e) {
        }

        scheduler.shutdown(true)
    }

    static void main(String[] args) {
        CatQuartzDemo demo = new CatQuartzDemo()
        demo.run()
    }
}
