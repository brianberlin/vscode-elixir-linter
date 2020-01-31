interface IOptions {
    cwd?: string;
}

export let getOptions = (settings): IOptions => {
  const options: IOptions = {};

  if (settings.projectPath) {
      options.cwd = settings.projectPath;
  }

  return options;
};
