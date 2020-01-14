/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import Editor from 'tinymce/core/api/Editor';

const getAutoLinkPattern = function (editor: Editor) {
  return editor.getParam('autolink_pattern', /^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@)(.+)$/i);
};

const getDefaultLinkTarget = function (editor: Editor) {
  return editor.getParam('default_link_target', false);
};

const useHTTPS = (editor: Editor) => {
  return editor.getParam('use_https', false, 'boolean');
};

export default {
  getAutoLinkPattern,
  getDefaultLinkTarget,
  useHTTPS
};