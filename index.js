const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const config = require('./config');

const DATA_DIR = 'data';

const transport = nodemailer.createTransport(config.mail);

toPascalCase = string => {
    return string.match(/[a-z]+/gi)
        .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
        .join('');
};

const getWeek = (date = new Date()) => {
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    const wdate = new Date();
    wdate.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    const week1 = new Date(wdate.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((wdate.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

const send = async (to, subject, content) => {
    transport.sendMail({
        from: '"📧 Stundenplan 📅" <noreply@teamcoffee.codes>',
        to,
        subject,
        html: content
    }, err => {
        if (err) throw err;
    });
};

let cache = {};
const getData = of => {
    cache = cache.of === of ? cache : JSON.parse(fs.readFileSync(path.resolve(`${__dirname}/data/${of}.json`), { encoding: 'utf-8' }));
    return cache;
};

const getSchedule = (of, dayOf = new Date()) => {
    const { even, odd } = getData(of);
    const week = getWeek(dayOf) % 2;
    const weeklySchedule = week === 1 ? odd : even;
    const dailySchedule = weeklySchedule[`${dayOf.getDay()}`]; 
    return dailySchedule;
};

const getNames = () => {
    const list = fs.readdirSync(`${__dirname}/${DATA_DIR}`, 'utf-8').map(item => item.split('.')[0]);
    return list;
}

const main = (tomorrow = undefined) => {
    const names = getNames(),
        date = new Date(),
        weekday = tomorrow ? new Date(date.setDate(date.getDate() + 1)) : date,
        day = tomorrow ? date.getDay() + 1 : date.getDay();
    
    if (day >= 6 && tomorrow) return;
    
    names.forEach(name => {
        const { email, of } = getData(name),
            schedule = getSchedule(name, weekday);
        
        send(email, 'Daily Schedule!', `<h3 style="color: black;">Your schedule for ${tomorrow ? 'tomorrow' : 'today'} ${toPascalCase(of)},</h3><p style="color:black;">${schedule.join('<br />')}</p>`);
    });
};

module.exports = main;
