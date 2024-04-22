const os = require("node:os");
const fs = require("node:fs");
const path = require("node:path");

const systemPlatformMap = {
    "win32": "Windows",
    "linux": "Linux",
    "darwin": "MacOS",
    "freebsd": "FreeBSD"
}

function getSystemInfo() {
    const system = systemPlatformMap[os.platform()]
    const arch = os.arch()
    const cpu = os.cpus()[0].model

    const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24);
    const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60

    const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
    const uptimeHoursInSeconds = uptimeHours * 60 * 60

    const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
    const uptimeMinsInSeconds = uptimeMins * 60

    const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)

    const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`

    const ramTotal = os.totalmem() / 1024 / 1024 / 1024
    const ramUsage = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024
    const ramUsagePercent = (ramUsage / ramTotal) * 100

    const dataAtual = new Date();

    const dia = dataAtual.getDate();
    const formatedDay = dia < 10 ? `0${dia}` : dia

    const mes = dataAtual.getMonth() + 1
    const formatedMonth = mes < 10 ? `0${mes}` : mes

    const ano = dataAtual.getFullYear();

    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    const formatedDate = `${formatedDay}/${formatedMonth}/${ano} ${horas}:${minutos}:${segundos}`

    return { system, arch, cpu, uptime, ramTotal, ramUsage, ramUsagePercent, formatedDate }
}

function printLog({ system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent, formatedDate }) {
    console.clear()
    console.log("DETALHES DO SISTEMA");
    console.log(`Sitema Operacional: ${system}`);
    console.log(`Arquitetura do Sistema: ${arch}`);
    console.log(`Modelo do Processador: ${cpu}`);
    console.log(`Tempo de Atividade do Sistema: ${uptime}`);
    console.log(`Uso de memória RAM: ${ramUsage.toFixed(2)} GB / ${Math.ceil(ramTotal)} GB ${ramUsagePercent.toFixed(2)}%`);
    console.log(`Data e Hora atual: ${formatedDate}`)
}

function saveLog({ system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent, formatedDate }) {
    const log = `DETALHES DO SISTEMA | Sitema Operacional: ${system} | Arquitetura do Sistema: ${arch} | Modelo do Processador: ${cpu} | Tempo de Atividade do Sistema: ${uptime} | Uso de memória RAM: ${ramUsage.toFixed(2)} GB / ${Math.ceil(ramTotal)} GB ${ramUsagePercent.toFixed(2)}% | Dia/Hora: ${formatedDate}\n---\n`

    const logDir = path.join("/", "log");

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir)
    }

    const logFilePath = path.join(logDir, "log.txt")
    fs.appendFileSync(logFilePath, log, "utf-8")
}

setInterval(() => {
    const systemInfo = getSystemInfo()
    printLog(systemInfo)
    saveLog(systemInfo)
}, 1000)