import React from 'react'
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";


export default function DividerForForm({title, color, width}) {
  return (
    <Divider textAlign="left" className="mt-3 mb-4">
      {/* <Chip label={title} style={{ background: color, width: width }} /> */}
    </Divider>
  );
}