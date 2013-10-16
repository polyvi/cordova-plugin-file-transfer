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

var privateModule = require('xFace/privateModule'),
    workspace = require('xFace/workspace'),
    exec = require('cordova/exec'),
    FileTransferError = require('./FileTransferError');

function FileTransferExec() {
    if(!workspace.enableWorkspaceCheck){
        exec.apply(this, arguments);
        return;
    }

    var successCallback = arguments[0];
    var failCallback = arguments[1];
    var service = arguments[2];
    var action = arguments[3];
    var actionArgs = arguments[4];

    if("FileTransfer" !== service){
        throw new Error('Plugin ' + service + ' should not use FileTransferExec.');
    }

    if("download" === action){
        var source = actionArgs[0];
        var target = actionArgs[1];
        var functionName = service + '.' + action;
        var result = workspace.checkWorkspace(privateModule.appWorkspace(), target, functionName);
        if (!result){
            var error = new FileTransferError(FileTransferError.FILE_NOT_FOUND_ERR,
                                              source,
                                              target);
            failCallback(error);
            return;
        }
    }
    exec.apply(this, arguments);
}

module.exports = FileTransferExec;
