import sel from '../../data/selectors';
import {name, gender,age, story, generatedStory} from '../../data/testData';
import exp from '../../data/expected.json';
import {inputValue4Submit} from '../../helpers/methods';


describe('Positive test cases for the submit button', function () {
    before('Open App', function () {
        browser.url('');
    });

    beforeEach('refresh browser', function() {
        browser.refresh();
    });

    it('TC-176 User opens the application, "Submit" button is disabled', function () {
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });

    it('TC-177 User reloads the application, "Submit" button is disabled', function () {
        browser.refresh()
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });

    it('TC-178 The Header = "My Little Hero" (second page)', function () {
        inputValue4Submit(name.default, gender.she, age.default, story.comedy)
        let header = $(sel.headerSecondP).getText();
        expect(header).toEqual(exp.headerSecondP);
    });

    it('TC-199 Name is correct in story title', function () {
        inputValue4Submit(name.default, gender.she, age.default, story.comedy)
        let storyTitle = $(sel.storyTitle).getText();
        expect(storyTitle).toEqual(exp.storyTitle);
    });

    it('TC-179 Name is correct in generated story', function () {
        inputValue4Submit(name.default, gender.she, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        let res = storyBody.match(/SuperGirl\(\*\|\*\)/)
        expect(res.toString()).toEqual(name.default);
    });

    it('TC-180a Gender is correct (+possessive) and appears in the story: "he"', function () {
        inputValue4Submit(name.default, gender.he, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        let res = storyBody.match(/ \bHis\b/ig)
        expect(res.toString().trim()).toEqual(exp.his);
    });

    it('TC-180b Gender is correct (+possessive) and appears in the story: "his"', function () {
        inputValue4Submit(name.default, gender.he, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        let res = storyBody.match(/\bhe\b/ig)
        expect(res.toString().trim()).toEqual(exp.heC);
    });

    it('TC-181a Gender is correct (+possessive) and appears in the story: "she"', function () {
        inputValue4Submit(name.default, gender.she, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        let res = storyBody.match(/ \bher\b/ig)
        expect(res.toString().trim()).toEqual(exp.her);
    });

    it('TC-181b Gender is correct (+possessive) and appears in the story: "her"', function () {
        inputValue4Submit(name.default, gender.she, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        let res = storyBody.match(/\bShe\b/ig)
        expect(res.toString().trim()).toEqual(exp.sheC);
    });

    it('TC-182a Gender is correct (+possessive) and appears in the story: "its"', function () {
        inputValue4Submit(name.default, gender.it, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        let res = storyBody.match(/ \bits\b/ig)
        expect(res.toString().trim()).toEqual(exp.its);
    });

    it('TC-182b Gender is correct (+possessive) and appears in the story: "it"', function () {
        inputValue4Submit(name.default, gender.it, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        let res = storyBody.match(/\bIt\b/g)
        expect(res.toString().trim()).toEqual(exp.itC);
    });


    it('TC-183 Words begin with a capital letter at the beginning of a sentence.', function () {
        inputValue4Submit(name.default, gender.she, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        expect(storyBody).toEqual(generatedStory.storyGenerated);
    });

    it('TC-184 Age is Correct and appears in the story.', function () {
        inputValue4Submit(name.default, gender.she, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        let res = storyBody.match(/\b1234567890\b/g)
        expect(res.toString().trim()).toEqual(exp.ageDefault);
    });

    it('TC-185 "Years" for 2 and more years.', function () {
        inputValue4Submit(name.default, gender.she, age.digit2, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        let res = storyBody.match(/\byears\b/g)
        expect(res.toString().trim()).toEqual(exp.years);
    });

    it('TC-186 "Year" for 1.', function () {
        inputValue4Submit(name.default, gender.she, age.oneDigit, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        let res = storyBody.match(/\byear\b/g)
        expect(res.toString().trim()).toEqual(exp.year);
    });

    it('TC-188 AExecuted story is correct and matches the corresponding text from the documentation.', function () {
        inputValue4Submit(name.default, gender.she, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        expect(storyBody).toEqual(generatedStory.storyGenerated);
    });

    it('TC-190 Uploaded avatar is present.', function () {
        inputValue5Submit(name.default, gender.she, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.storyINDX].getText();
        expect(storyBody).toEqual(generatedStory.storyGenerated);
    });

    it('TC-191 User doesn\'t upload an avatar.', function () {
        inputValue4Submit(name.default, gender.she, age.default, story.comedy)
        let avatarField = $(sel.avatar).isDisplayed();
        expect(avatarField).toEqual(false);
    });

    it('TC- The moral is correct and has no spelling or grammatical errors.', function () {
        inputValue4Submit(name.default, gender.she, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.moraINDX].getText();
        expect(storyBody).toEqual(exp.storyMoral);
    });

    it('TC- Moral is corresponding the story.', function () {
        inputValue4Submit(name.default, gender.she, age.default, story.comedy)
        let storyBody = $$(sel.storySecondP)[generatedStory.moraINDX].getText();
        expect(storyBody).toEqual(exp.storyMoral);
    });

});