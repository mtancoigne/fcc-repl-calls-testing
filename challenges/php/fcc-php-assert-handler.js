const PHP_ASSERT_HANDLER=[
  "<?php",
  "function fccAssertHandler($file, $line, $code, $desc = null){",
    "if ($desc) {echo \"\\n$desc\";}",
    "else{echo \"\\nAssertion failed but no message was provided\";}",
    "echo \"\\n\";",
    "}",
  "assert_options(ASSERT_CALLBACK, 'fccAssertHandler');",
  "assert_options(ASSERT_WARNING, 0);",
  "?>"
].join("\n");
