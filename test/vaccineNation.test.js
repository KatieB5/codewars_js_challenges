const vaccineNation = require("../challenges/vaccineNation");

describe("vaccineNation", () => {
    test("it throws an error if not passed a value for each of the three parameters", () => {
        expect(() => {
            vaccineNation();
        }).toThrow("this function requires an input for all three parameters in order to run");
    });

    test("it provides the correct vaccines required, per the age of the patient, listed alphabetically", () => {
        const actual = vaccineNation("8 weeks", "up-to-date", "march");
        expect(actual).toEqual(['fiveInOne', 'meningitisB', 'pneumococcal', 'rotavirus']);

        const actual1 = vaccineNation("12 weeks", "up-to-date", "march");
        expect(actual1).toEqual(['fiveInOne', 'rotavirus']);

        const actual2 = vaccineNation("16 weeks", "up-to-date", "march");
        expect(actual2).toEqual(['fiveInOne', 'meningitisB', 'pneumococcal']);

        const actual3 = vaccineNation("12 months", "up-to-date", "march");
        expect(actual3).toEqual(['hibMenC', 'measlesMumpsRubella', 'meningitisB']);

        const actual4 = vaccineNation("40 months", "up-to-date", "march");
        expect(actual4).toEqual(['measlesMumpsRubella', 'preSchoolBooster']);
    });

    test("it provides the correct vaccines required, per the age and status of the patient, listed alphabetically, with duplicates removed", () => {
        const actual = vaccineNation("16 weeks", "8 weeks", "march");
        expect(actual).toEqual(['fiveInOne', 'meningitisB', 'pneumococcal', 'rotavirus']);

        const actual1 = vaccineNation("16 weeks", "12 weeks", "march");
        expect(actual1).toEqual(['fiveInOne', 'meningitisB', 'pneumococcal', 'rotavirus']);

        const actual3 = vaccineNation("12 months", "8 weeks", "march");
        expect(actual3).toEqual(['fiveInOne', 'hibMenC', 'measlesMumpsRubella', 'meningitisB', 'pneumococcal', 'rotavirus']);

        const actual4 = vaccineNation("40 months", "12 months", "march");
        expect(actual4).toEqual(['hibMenC', 'measlesMumpsRubella', 'meningitisB', 'preSchoolBooster']);
    });

    test("it provides the correct vaccines required, per the age and status of the patient and the month of the year, listed alphabetically, with duplicates removed", () => {
        const actual = vaccineNation("16 weeks", "8 weeks", "october");
        expect(actual).toEqual(['fiveInOne', 'meningitisB', 'offer fluVaccine', 'pneumococcal', 'rotavirus']);

        const actual1 = vaccineNation("16 weeks", "12 weeks", "november");
        expect(actual1).toEqual(['fiveInOne', 'meningitisB', 'offer fluVaccine', 'pneumococcal', 'rotavirus']);

        const actual3 = vaccineNation("12 months", "8 weeks", "september");
        expect(actual3).toEqual(['fiveInOne', 'hibMenC', 'measlesMumpsRubella', 'meningitisB', 'offer fluVaccine', 'pneumococcal', 'rotavirus']);
    });
});