# RicherCider ― Vencord Plugin

RicherCider is a simple plugin to allow [Cider](https://cider.sh) to use the Discord presence type "Listening to" and various other features.


## Building
> Requires: Git, NodeJS, PNPM

Due to custom plugin importing not being availale natively in Vencord, to use RicherCider you must build Vencord from source including the RicherCider plugin.



### Downloading Vencord Source

To begin, **clone** the Vencord repository to your local disk using the following command:

`git clone https://github.com/Vendicated/Vencord.git`

### Adding RicherCider

Once you have successfully cloned the Vencord repository, navigate to the following folder:

`Vencord/src/plugins/`

In this folder, **copy** the file named **richerCider.desktop.tsx**.

### Installing

To install your customised version of Vencord, run the following three commands:

`pnpm install`<br>
`pnpm build`<br>
`pnpm inject`<br>

Next, use the launched Vencord installer to inject your Discord installation.

### Enabling

Once Vencord has been injected, you will be able to find richerCider in Discord's settings.
