package org.quartz.demo

/**
 * Created by imunteanu on 2/3/16.
 */
enum CatEnum {

    MEOW("meow", "0/3 * * * * ?",   "    /\\___/\\\n" +
                                    "   (  o o  )\n" +
                                    "   /   *   \\\n" +
                                    "   \\__\\_/__/ meow!\n" +
                                    "     /   \\\n" +
                                    "    / ___ \\\n" +
                                    "    \\/___\\/"),

    TOM("tom", "0/2 * * * * ?", "_   /|\n" +
                                "\\'o.O'\n" +
                                "=(_._)=\n" +
                                "  |U|\n" +
                                " /  |\n" +
                                "//|  \\"),

    KARABAH ("karabah", "0/5 * * * * ?",    "    /\\__/\\\n" +
                                            "   /`    '\\\n" +
                                            " === 0  0 ===\n" +
                                            "   \\  --  /\n" +
                                            "  /        \\\n" +
                                            " /          \\\n" +
                                            "|            |\n" +
                                            " \\  ||  ||  /\n" +
                                            "  \\_oo__oo_/#######o")

    final String name
    final String schedule
    final String ascii

    CatEnum(String name, String schedule, String ascii) {
        this.name = name
        this.schedule = schedule
        this.ascii = ascii
    }
}