exports.render = (colors) => {
  const c = 'dark' in colors ? colors.dark : colors.light;
  const unindent = (s) => s
    .split('\n')
    .filter(x => x !== '')
    .map(x => x.trim())
    .reduce((x, y) => x + '\n' + y);
  const theme = unindent(`
	divert(-1)dnl
	define(ACCENT0, \`${c.accent0}')
	define(ACCENT1, \`${c.accent1}')
	define(ACCENT2, \`${c.accent2}')
	define(ACCENT3, \`${c.accent3}')
	define(ACCENT4, \`${c.accent4}')
	define(ACCENT5, \`${c.accent5}')
	define(ACCENT6, \`${c.accent6}')
	define(ACCENT7, \`${c.accent7}')
	define(SHADE0, \`${c.shade0}')
	define(SHADE1, \`${c.shade1}')
	define(SHADE2, \`${c.shade2}')
	define(SHADE3, \`${c.shade3}')
	define(SHADE4, \`${c.shade4}')
	define(SHADE5, \`${c.shade5}')
	define(SHADE6, \`${c.shade6}')
	define(SHADE7, \`${c.shade7}')
	divert(0)dnl
  `);

  return [
    Promise.resolve({
      name: 'themer.m4',
      contents: Buffer.from(theme, 'utf8')
    })
  ];
};
