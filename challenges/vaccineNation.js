function vaccineNation(age, status, month) {
    if (age === undefined || status === undefined || month === undefined) throw new Error("this function requires an input for all three parameters in order to run");

    let vaccines = {
        fiveInOne: ['8 weeks', '12 weeks', '16 weeks'],
        pneumococcal: ['8 weeks', '16 weeks'],
        rotavirus: ['8 weeks', '12 weeks'],
        meningitisB: ['8 weeks', '16 weeks', '12 months'],
        hibMenC: ['12 months'],
        measlesMumpsRubella: ['12 months', '40 months'],
        fluVaccine: ['september', 'october', 'november'],
        preSchoolBooster: ['40 months']
    };

    let output = [];

    for (let vaccine in vaccines) {

        let ageList = vaccines[vaccine];

        for (let i = 0; i < ageList.length; i++) {
            if (age === ageList[i]) {
                output.push(vaccine)
            }
        }

        for (let i = 0; i < ageList.length; i++) {
            if (status === ageList[i]) {
                output.push(vaccine)
            }
        }

        for (let i = 0; i < ageList.length; i++) {
            if (month === ageList[i]) {
                output.push("offer fluVaccine")
            }
        }

    }

    let filteredOutput = [...new Set(output)];

    return filteredOutput.sort();
}

module.exports = vaccineNation;