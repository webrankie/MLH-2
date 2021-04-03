import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods'
import exp from "../../data/expected";
import * as path from "path";
import imagePath from "../../data/testData";

describe('Image', function () {

    before('Open App', function () {
        browser.url('');
    });

    afterEach('Refresh App', function () {
        browser.refresh();
    });

    describe('Positive tests', function () {


        it('TC-147 Image field placeholder = "Click or drag and drop"', function () {
            let placeholder = $(sel.image).getText();
            expect(placeholder).toEqual(exp.imagePlaceholder);
        });

        it('TC-148 Click works for .jpeg files', function () {
            let fileUpload = $(sel.imageUpload);
            let thumbnail = $(sel.imageThumbnail);
            let filePath = path.join(__dirname, '../../data/images/2mb-2.jpg');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            expect(thumbnail).toBeExisting();

        });

        it('TC-150 Click works for .png files', function () {
            let fileUpload = $(sel.imageUpload);
            let thumbnail = $(sel.imageThumbnail);
            let filePath = path.join(__dirname, '../../data/images/2mb-png.png');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            expect(thumbnail).toBeExisting();

        });

        it('TC-152 Max size .jpeg file is 3.9 Mb', function () {
            let fileUpload = $(sel.imageUpload);
            let thumbnail = $(sel.imageThumbnail);
            let filePath = path.join(__dirname, '../../data/images/39mb-jpeg.jpg');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            expect(thumbnail).toBeExisting();

        });

        it('TC-154 Max size .png file is 3.9 Mb', function () {
            let fileUpload = $(sel.imageUpload);
            let thumbnail = $(sel.imageThumbnail);
            let filePath = path.join(__dirname, '../../data/images/39mb-png.png');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            expect(thumbnail).toBeExisting();

        });

        it('TC-156 Bin icon appears', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/images/2mb-2.jpg');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            let binIcon = $(sel.binIcon);
            expect(binIcon).toBeExisting();

        });

        it('TC-157 User can delete the image', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/images/2mb-2.jpg');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            let binIcon = $(sel.binIcon).click();
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);

        });

    });

    describe('Negative tests', function () {

        it('TC-161 User cannot Upload 4Mb .jpeg', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/images/43mb-jpeg.jpg');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

        it('TC-163 User cannot Upload 4Mb .png', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/images/43mb-png.png');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

        it('TC-165 User cannot Upload 2Mb .gif', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/images/2mb-gif.gif');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);

        });

        it('TC-166 User cannot Upload 2Mb .pdf', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/images/2mb-pdf.pdf');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);

        });

        it('TC-167 User cannot Upload 2Mb .mp4', function () {
            let fileUpload = $(sel.imageUpload);
            let thumbnail = $(sel.imageThumbnail);
            let filePath = path.join(__dirname, '../../data/images/2mb-video.mp4');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            expect(thumbnail).toBeExisting();

        });

        it('TC-168 User cannot Upload 2Mb .bmp', function () {
            let fileUpload = $(sel.imageUpload);
            let thumbnail = $(sel.imageThumbnail);
            let filePath = path.join(__dirname, '../../data/images/2mb-bmp.bmp');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            expect(thumbnail).toBeExisting();

        });

        it('TC-169 User cannot Upload 2Mb .ppt', function () {
            let fileUpload = $(sel.imageUpload);
            let thumbnail = $(sel.imageThumbnail);
            let filePath = path.join(__dirname, '../../data/images/1mb.ppt');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            expect(thumbnail).toBeExisting();

        });

        it('TC-170 User cannot Upload 2Mb .psd', function () {
            let fileUpload = $(sel.imageUpload);
            let thumbnail = $(sel.imageThumbnail);
            let filePath = path.join(__dirname, '../../data/images/2mb-psd.psd');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            expect(thumbnail).toBeExisting();

        });

        it('TC-171 User cannot Upload 2Mb .tif', function () {
            let fileUpload = $(sel.imageUpload);
            let thumbnail = $(sel.imageThumbnail);
            let filePath = path.join(__dirname, '../../data/images/2mb-tif.tif');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            expect(thumbnail).toBeExisting();

        });

        it('TC-172 User cannot Upload 2Mb .raw', function () {
            let fileUpload = $(sel.imageUpload);
            let thumbnail = $(sel.imageThumbnail);
            let filePath = path.join(__dirname, '../../data/images/2mb-raw copy.raw');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            expect(thumbnail).toBeExisting();

        });
    });
});

