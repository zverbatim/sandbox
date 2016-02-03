package org.quartz.demo

import org.quartz.Job
import org.quartz.JobExecutionContext
import org.quartz.JobExecutionException

import javax.imageio.ImageIO
import java.awt.image.BufferedImage

class Cat implements Job {

    Cat() {}

    @Override
    void execute(JobExecutionContext context) throws JobExecutionException {
        print "    /\\___/\\\n" +
                "   (  o o  )\n" +
                "   /   *   \\\n" +
                "   \\__\\_/__/ meow!\n" +
                "     /   \\\n" +
                "    / ___ \\\n" +
                "    \\/___\\/\n\n"
    }
}
