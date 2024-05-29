const { exec } = require('child_process');

function executeCode(req, res) {
    const { language, code, args } = req.body;
    let command;

    if (language === 'python') {
        command = `python -c "${code}" ${args.join(' ')}`;
    } else if (language === 'javascript') {
        command = `node -e "${code}" ${args.join(' ')}`;
    } else {
        return res.status(400).send('Unsupported language');
    }

    exec(command, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(stderr);
        } else {
            res.send(stdout);
        }
    });
}

module.exports = { executeCode };
