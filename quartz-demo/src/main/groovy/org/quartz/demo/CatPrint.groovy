package org.quartz.demo

import org.quartz.Job
import org.quartz.JobDataMap
import org.quartz.JobExecutionContext
import org.quartz.JobExecutionException

class CatPrint implements Job {

    CatPrint() {}

    @Override
    void execute(JobExecutionContext context) throws JobExecutionException {
        JobDataMap dataMap = context.getJobDetail().getJobDataMap();
        String ascii = dataMap.get("ascii");
        println ascii
    }
}
