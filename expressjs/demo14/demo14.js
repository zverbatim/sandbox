"use strict";

import { getUsefulContents } from "file";

getUsefulContents("./dummy.txt", data => {
    console.log(data);
});