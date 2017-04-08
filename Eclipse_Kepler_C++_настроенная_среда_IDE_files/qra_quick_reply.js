/*======================================================================*\
|| #################################################################### ||
|| # Attachments in Quick Reply 1.0.0
|| # ---------------------------------------------------------------- # ||
|| # This plugin allow upload attachments in quick reply.             # ||
|| # Created by YURSHAT                                               # ||
|| # ---------------------------------------------------------------- # ||
|| # Support URL: http://vbsupport.org/forum/showthread.php?t=51854   # ||
|| #################################################################### ||
\*======================================================================*/

/**
* Clear attachment list after submit QR form
*/
YAHOO.util.Event.addListener("qrform", "submit", function(e)
{
	if (YAHOO.util.Dom.getStyle("qr_posting_msg", "display") != 'none')
	{
		var listobj = fetch_object("attachlist");
		
		if (listobj != null)
		{
			while (listobj.hasChildNodes())
			{
				listobj.removeChild(listobj.firstChild);
			}
		}
		
		vB_Attachments = new vB_Attachment('attachlist', 'vB_Editor_QR');
	}
});