/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/


describe('FileTransfer workspace', function() {
    // https://github.com/apache/cordova-labs/tree/cordova-filetransfer
    var server = "http://cordova-filetransfer.jitsu.com";
    var server_with_credentials = "http://cordova_user:cordova_password@cordova-filetransfer.jitsu.com";

    // deletes and re-creates the specified content
    var writeFile = function(fileName, fileContent, success, error) {
        deleteFile(fileName, function() {
            root.getFile(fileName, {create: true}, function(fileEntry) {
                fileEntry.createWriter(function (writer) {

                    writer.onwrite = function(evt) {
                        success(fileEntry);
                    };

                    writer.onabort = function(evt) {
                        error(evt);
                    };

                    writer.error = function(evt) {
                        error(evt);
                    };

                    writer.write(fileContent + "\n");
                }, error);
            }, error);
        });
    };

    var readFileEntry = function(entry, success, error) {
        entry.file(function(file) {
            var reader = new FileReader();
            reader.onerror = error;
            reader.onload = function(e) {
                success(reader.result);
            };
            reader.readAsText(file);
        }, error);
    };

    var getMalformedUrl = function() {

            // iOS doesn't care about protocol, space in hostname causes error
            return "httpssss://exa mple.com";

    };

    // deletes file, if it exists, then invokes callback
    var deleteFile = function(fileName, callback) {
        callback = callback || function() {};
        var spy = jasmine.createSpy().andCallFake(callback);
        root.getFile(fileName, null,
            // remove file system entry
            function(entry) {
                entry.remove(spy, spy);
            },
            // doesn't exist
            spy);
        waitsFor(function() { return spy.wasCalled; }, Tests.TEST_TIMEOUT);
    };

    describe('download method should handle workspace correctly', function() {
        it("filetransfer.workspace.spec.1", function() {
            var downloadWin = createDoNotCallSpy('downloadWin');
            var remoteFile = server + "/robots.txt"
            var localFileName = remoteFile.substring(remoteFile.lastIndexOf('/')+1);
            var lastProgressEvent = null;

            var fail = jasmine.createSpy().andCallFake(function(error) {
                expect(error.code).toBe(FileTransferError.FILE_NOT_FOUND_ERR);
                expect(error.source).toBe(remoteFile);
                expect(error.target).toBe(root.fullPath + "/../" + localFileName);
            });

            this.after(function() {
                deleteFile(localFileName);
            });
            runs(function() {
                var ft = new FileTransfer();
                ft.onprogress = function(e) {
                    lastProgressEvent = e;
                };
                ft.download(remoteFile, root.fullPath + "/../" + localFileName, downloadWin, fail);
            });

            waitsForAny(downloadWin, fail);
        });
        it("filetransfer.workspace.spec.2", function() {
            var downloadWin = createDoNotCallSpy('downloadWin');
            var remoteFile = server + "/robots.txt"
            var localFileName = remoteFile.substring(remoteFile.lastIndexOf('/')+1);
            var lastProgressEvent = null;

            var fail = jasmine.createSpy().andCallFake(function(error) {
                expect(error.code).toBe(FileTransferError.FILE_NOT_FOUND_ERR);
                expect(error.source).toBe(remoteFile);
                expect(error.target).toBe(root.fullPath + "/../data/" + localFileName);
            });

            this.after(function() {
                deleteFile(localFileName);
            });
            runs(function() {
                var ft = new FileTransfer();
                ft.onprogress = function(e) {
                    lastProgressEvent = e;
                };
                ft.download(remoteFile, root.fullPath + "/../data/" + localFileName, downloadWin, fail);
            });

            waitsForAny(downloadWin, fail);
        });
        it("filetransfer.workspace.spec.3", function() {
            var downloadWin = createDoNotCallSpy('downloadWin');
            var remoteFile = server + "/robots.txt"
            var localFileName = remoteFile.substring(remoteFile.lastIndexOf('/')+1);
            var lastProgressEvent = null;

            var fail = jasmine.createSpy().andCallFake(function(error) {
                expect(error.code).toBe(FileTransferError.FILE_NOT_FOUND_ERR);
                expect(error.source).toBe(remoteFile);
                expect(error.target).toBe("/../data/" + localFileName);
            });

            this.after(function() {
                deleteFile(localFileName);
            });
            runs(function() {
                var ft = new FileTransfer();
                ft.onprogress = function(e) {
                    lastProgressEvent = e;
                };
                ft.download(remoteFile, "/../data/" + localFileName, downloadWin, fail);
            });

            waitsForAny(downloadWin, fail);
        });
        it("filetransfer.workspace.spec.4", function() {
            var downloadWin = createDoNotCallSpy('downloadWin');
            var remoteFile = server + "/robots.txt"
            var localFileName = remoteFile.substring(remoteFile.lastIndexOf('/')+1);
            var lastProgressEvent = null;

            var fail = jasmine.createSpy().andCallFake(function(error) {
                expect(error.code).toBe(FileTransferError.FILE_NOT_FOUND_ERR);
                expect(error.source).toBe(remoteFile);
                expect(error.target).toBe("../data/" + localFileName);
            });

            this.after(function() {
                deleteFile(localFileName);
            });
            runs(function() {
                var ft = new FileTransfer();
                ft.onprogress = function(e) {
                    lastProgressEvent = e;
                };
                ft.download(remoteFile, "../data/" + localFileName, downloadWin, fail);
            });

            waitsForAny(downloadWin, fail);
        });
        it("filetransfer.workspace.spec.5", function() {
            var downloadWin = createDoNotCallSpy('downloadWin');
            var remoteFile = server + "/robots.txt"
            var localFileName = remoteFile.substring(remoteFile.lastIndexOf('/')+1);
            var lastProgressEvent = null;

            var fail = jasmine.createSpy().andCallFake(function(error) {
                expect(error.code).toBe(FileTransferError.FILE_NOT_FOUND_ERR);
                expect(error.source).toBe(remoteFile);
                expect(error.target).toBe("/usr/local/bad/file/" + localFileName);
            });

            this.after(function() {
                deleteFile(localFileName);
            });
            runs(function() {
                var ft = new FileTransfer();
                ft.onprogress = function(e) {
                    lastProgressEvent = e;
                };
                ft.download(remoteFile, "/usr/local/bad/file/" + localFileName, downloadWin, fail);
            });

            waitsForAny(downloadWin, fail);
        });
        it("filetransfer.workspace.spec.6", function() {
            var fail = createDoNotCallSpy('downloadFail');
            var remoteFile = server + "/robots.txt"
            var localFileName = remoteFile.substring(remoteFile.lastIndexOf('/')+1);
            var lastProgressEvent = null;

            var downloadWin = jasmine.createSpy().andCallFake(function(entry) {
                expect(entry.name).toBe(localFileName);
                expect(lastProgressEvent.loaded).toBeGreaterThan(1);
            });

            this.after(function() {
                deleteFile(localFileName);
            });
            runs(function() {
                var ft = new FileTransfer();
                ft.onprogress = function(e) {
                    lastProgressEvent = e;
                };
                ft.download(remoteFile, root.fullPath + "/../workspace/" + localFileName, downloadWin, fail);
            });

            waitsForAny(downloadWin, fail);
        });
        it("filetransfer.workspace.spec.7", function() {
            var fail = createDoNotCallSpy('downloadFail');
            var remoteFile = server + "/robots.txt"
            var localFileName = remoteFile.substring(remoteFile.lastIndexOf('/')+1);
            var lastProgressEvent = null;

            var downloadWin = jasmine.createSpy().andCallFake(function(entry) {
                expect(entry.name).toBe(localFileName);
                expect(lastProgressEvent.loaded).toBeGreaterThan(1);
            });

            this.after(function() {
                deleteFile("download/" + localFileName);
            });
            runs(function() {
                var ft = new FileTransfer();
                ft.onprogress = function(e) {
                    lastProgressEvent = e;
                };
                ft.download(remoteFile, root.fullPath + "/../workspace/download/" + localFileName, downloadWin, fail);
            });

            waitsForAny(downloadWin, fail);
        });
    });
});
