import { withActionOutput } from '../utils';

import WFHashType from '../interfaces/WF/WFHashType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Generate Hash
 * @section Actions > Scripting > Files
 * @icon Scripting
 *
 * Generates a MD5/SHA1 hash from the input.
 *
 * ```js
 * generateHash({
 *   type: 'MD5',
 * });
 * ```
 */

const generateHash = (
  {
    type = 'MD5',
  }: {
    /** The type of hash to use */
    type?: WFSerialization | WFHashType,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.hash',
  WFWorkflowActionParameters: {
    WFHashType: type,
  },
});

export default withActionOutput(generateHash);
