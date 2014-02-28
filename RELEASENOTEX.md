<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
# 
# http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->
# Release Note X


### 0.3.2 Wed Jan 08 2014 15:14:40 GMT+0800 (CST)
 *  added releasenotex.md

## 0.3.3 (Fri Feb 28 2014)


 *  Added auto tests for APPWORKSPACE fs.
 *  Make it a priority to use filesystemName to create Entry object
 *  [iOS] Get file plugin via commandDelegate to avoid using global file plugin directly.
 *  Add back test
 *  CB-5980 Updated version and RELEASENOTES.md for release 0.4.1
 *  CB-5365 Remove unused exception var to prevent warnings?
 *  CB-2421 explicitly write the bytesSent,responseCode,result to the FileUploadResult pending release of cordova-plugin-file dependency, added some sanity checks for callbacks
 *  iOS: Update for new file plugin api
 *  CB-5631 Removed SimpleTrackingInputStream.read(byte[] buffer)
 *  CB-5762 android: Fix lengthComputable set wrong for gzip downloads
 *  CB-4899 [BlackBerry10] Improve binary file transfer download
 *  Delete stale test/ directory
 *  CB-5722 [BlackBerry10] Update upload function to use native file object
 *  CB-5658 Update license comment formatting of doc/index.md
 *  CB-5658 Add doc.index.md for File Transfer plugin
 *  CB-5658 Delete stale snapshot of plugin docs
 *  Remove @1 designation from file plugin dependency until pushed to npm
 *  CB-5466: Update to work with filesystem URLs
 *  [CB-5565] Incremented plugin version on dev branch.
 *  [CB-5565] Updated version and RELEASENOTES.md for release 0.4.0
 *  CB-5466: Partial revert; we're not ready yet for FS urls
 *  add ubuntu platform
 *  CB-5466: Minor version bump
 *  CB-5466: Update FileTransfer plugin to accept filesystem urls
 *  Added amazon-fireos platform. Change to use amazon-fireos as the platform if the user agen string contains 'cordova-amazon-fireos'
 *  CB-5188:
 *  [CB-5188] Updated version and RELEASENOTES.md for release 0.3.4
 *  CB-5128: added repo + issue tag to plugin.xml for file transfer plugin
 *  [CB-5010] Incremented plugin version on dev branch.
 *  [CB-5010] Updated version and RELEASENOTES.md for release 0.3.3
 *  removed un-needed undef check
 *  Fix missing headers in Windows 8 upload proxy
 *  Fix missing headers in Windows 8 Proxy
 *  Fix Windows 8 HTMLAnchorElement return host:80 which force Basic Auth Header to replace options Auth Header
 *  [CB-4915] Incremented plugin version on dev branch.
 *  Revert "Added logic to check workspace in file transfer plugin"
 *  Revert "Since 'assets-library://' has already been taken care of in workspace js module, remove platform-related code from FileTransferExec"
 *  Revert "Move filetransfer workspace-related tests into its own test file 'filetransfer-workspace.tests.js'"
 *  Revert "Rename 'filetransfer-workspace.tests.js' to 'filetransfer.xface.tests.js'"
 *  batch modify .reviewboard
