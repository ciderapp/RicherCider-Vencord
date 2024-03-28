/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 OpenAsar
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Link } from "@components/Link";
import { Logger } from "@utils/Logger";
import definePlugin from "@utils/types";
import { Forms } from "@webpack/common";
const appIds = [
    "911790844204437504",
    "886578863147192350",
    "1020414178047041627",
    "1032800329332445255"
];
const logger = new Logger("richerCider");
export default definePlugin({
    name: "richerCider",
    description: "Enhances Cider (More details in info button) by adding the \"Listening to\" type prefix to the user's rich presence when an applicable ID is found.",
    authors: [{
        id: 191621342473224192n,
        name: "cryptofyre",
    },
    {
        id: 546426958465073163n,
        name: "Core",
    }
    ],
    start() {
        logger.debug("Plugin started");
    },
    patches: [
        {
            find: '="LocalActivityStore",',
            replacement: {
                match: /LOCAL_ACTIVITY_UPDATE:function\((\i)\)\{/,
                replace: "$&$self.patchActivity($1.activity);",
            }
        },
        {
            find: "}renderTimeBar(",
            replacement: {
                match: /renderTimeBar\((.{1,3})\){.{0,50}?let/,
                replace: "renderTimeBar($1){let"
            }
        }
    ],
    settingsAboutComponent: () => (
        <>
            <Forms.FormTitle tag="h3">Requirements</Forms.FormTitle>
            <Forms.FormText>
                You will need <Link href="https://cider.sh">Cider</Link> (any version) to use this plugin.
            </Forms.FormText>
            <br></br>
            <Forms.FormTitle tag="h3">What is Cider?</Forms.FormTitle>
            <Forms.FormText>
                Cider is a cross-platform Apple Music experience built on Vue.js and written from the ground up with performance in mind.
            </Forms.FormText>
            <br></br>
            <Forms.FormTitle tag="h3">Recommended Optional Plugins</Forms.FormTitle>
            <Forms.FormText>
                I'd recommend using TimeBarAllActivities alongside this plugin to give off a much better visual to the eye (Keep in mind this only affects your client and will not show for other users)
            </Forms.FormText>
        </>
    ),
    patchActivity(activity: { application_id: string; type: number; }) {
        if (appIds.includes(activity?.application_id)) {
            logger.debug("Found a matching application ID, correcting activity type");
            activity.type = 2; /* LISTENING type */
        }
    },
});
