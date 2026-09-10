import type { CrmMessages } from "./englishCrmMessages";

export const persianCrmMessages = {
  resources: {
    companies: {
      name: "شرکت |||| شرکت‌ها",
      forcedCaseName: "شرکت",
      fields: {
        name: "نام شرکت",
        website: "وب‌سایت",
        linkedin_url: "آدرس لینکدین",
        phone_number: "شماره تلفن",
        created_at: "تاریخ ایجاد",
        nb_contacts: "تعداد مخاطبین",
        revenue: "درآمد",
        sector: "حوزه فعالیت",
        size: "اندازه",
        tax_identifier: "شناسه مالیاتی",
        address: "آدرس",
        city: "شهر",
        zipcode: "کد پستی",
        state_abbr: "استان",
        country: "کشور",
        description: "توضیحات",
        context_links: "پیوندهای مرتبط",
        sales_id: "مدیر حساب",
      },
      empty: {
        description: "به نظر می‌رسد فهرست شرکت‌ها خالی است.",
        title: "شرکتی یافت نشد",
      },
      field_categories: {
        contact: "تماس",
        additional_info: "اطلاعات تکمیلی",
        address: "آدرس",
        context: "زمینه",
      },
      action: {
        create: "ایجاد شرکت",
        edit: "ویرایش شرکت",
        new: "شرکت جدید",
        show: "نمایش شرکت",
      },
      added_on: "افزوده‌شده در %{date}",
      followed_by: "پیگیری توسط %{name}",
      followed_by_you: "پیگیری توسط شما",
      no_contacts: "بدون مخاطب",
      nb_contacts: "%{smart_count} مخاطب |||| %{smart_count} مخاطب",
      nb_deals: "%{smart_count} معامله |||| %{smart_count} معامله",
      sizes: {
        one_employee: "۱ نفر",
        two_to_nine_employees: "۲ تا ۹ نفر",
        ten_to_forty_nine_employees: "۱۰ تا ۴۹ نفر",
        fifty_to_two_hundred_forty_nine_employees: "۵۰ تا ۲۴۹ نفر",
        two_hundred_fifty_or_more_employees: "۲۵۰ نفر یا بیشتر",
      },
      autocomplete: {
        create_error: "خطایی هنگام ایجاد شرکت رخ داد",
        create_item: "ایجاد %{item}",
        create_label: "برای ایجاد شرکت جدید شروع به تایپ کنید",
      },
    },
    contacts: {
      name: "مخاطب |||| مخاطبین",
      forcedCaseName: "مخاطب",
      field_categories: {
        background_info: "اطلاعات پس‌زمینه",
        identity: "هویت",
        misc: "متفرقه",
        personal_info: "اطلاعات شخصی",
        position: "سمت",
      },
      fields: {
        first_name: "نام",
        last_name: "نام خانوادگی",
        last_seen: "آخرین مشاهده",
        title: "عنوان",
        company_id: "شرکت",
        email_jsonb: "نشانی‌های ایمیل",
        email: "ایمیل",
        phone_jsonb: "شماره‌های تلفن",
        phone_number: "شماره تلفن",
        linkedin_url: "آدرس لینکدین",
        background: "پیشینه (بیوگرافی، نحوه آشنایی و...)",
        has_newsletter: "عضو خبرنامه",
        sales_id: "مدیر حساب",
      },
      action: {
        add: "افزودن مخاطب",
        add_first: "نخستین مخاطب خود را اضافه کنید",
        create: "ایجاد مخاطب",
        edit: "ویرایش مخاطب",
        export_vcard: "خروجی وی‌کارت",
        new: "مخاطب جدید",
        show: "نمایش مخاطب",
      },
      background: {
        last_activity_on: "آخرین فعالیت در %{date}",
        added_on: "افزوده‌شده در %{date}",
        followed_by: "پیگیری توسط %{name}",
        followed_by_you: "پیگیری توسط شما",
        status_none: "بدون وضعیت",
      },
      position_at: "%{title} در",
      position_at_company: "%{title} در %{company}",
      empty: {
        description: "به نظر می‌رسد فهرست مخاطبین خالی است.",
        title: "مخاطبی یافت نشد",
      },
      import: {
        title: "درون‌ریزی مخاطبین",
        button: "درون‌ریزی CSV",
        complete:
          "درون‌ریزی مخاطبین کامل شد. %{importCount} مخاطب وارد شد با %{errorCount} خطا",
        progress:
          "%{importCount} از %{rowCount} مخاطب وارد شد با %{errorCount} خطا.",
        error:
          "درون‌ریزی این فایل ناموفق بود، لطفاً مطمئن شوید یک فایل CSV معتبر ارائه کرده‌اید.",
        imported: "وارد شد",
        remaining_time: "زمان تقریبی باقی‌مانده:",
        running: "درون‌ریزی در حال اجراست، لطفاً این برگه را نبندید.",
        sample_download: "دانلود نمونه CSV",
        sample_hint:
          "این یک فایل CSV نمونه است که می‌توانید به‌عنوان الگو استفاده کنید",
        stop: "توقف درون‌ریزی",
        csv_file: "فایل CSV",
        contacts_label: "مخاطب |||| مخاطب",
      },
      inputs: {
        genders: {
          male: "آقا",
          female: "خانم",
          nonbinary: "سایر",
        },
        personal_info_types: {
          work: "کاری",
          home: "منزل",
          other: "سایر",
        },
      },
      list: {
        error_loading: "خطا در بارگذاری مخاطبین",
      },
      bulk_tag: {
        action: "برچسب",
        back: "بازگشت به برچسب‌ها",
        create_description:
          "یک برچسب جدید بسازید و آن را به مخاطبین انتخاب‌شده اعمال کنید.",
        description:
          "یک برچسب موجود انتخاب کنید یا برای مخاطبین انتخاب‌شده یک برچسب جدید بسازید.",
        empty:
          "هنوز برچسبی وجود ندارد. برای برچسب‌گذاری مخاطبین انتخاب‌شده یکی بسازید.",
        error: "افزودن برچسب به مخاطبین ناموفق بود",
        noop: "مخاطبین انتخاب‌شده قبلاً این برچسب را دارند",
        success:
          "برچسب به %{smart_count} مخاطب اضافه شد |||| برچسب به %{smart_count} مخاطب اضافه شد",
        title: "افزودن برچسب به مخاطبین",
      },
      merge: {
        action: "ادغام با مخاطب دیگر",
        confirm: "ادغام مخاطبین",
        current_contact: "مخاطب فعلی (حذف خواهد شد)",
        description: "این مخاطب را با مخاطب دیگری ادغام کنید.",
        error: "ادغام مخاطبین ناموفق بود",
        merging: "در حال ادغام...",
        no_additional_data: "داده تکمیلی برای ادغام وجود ندارد",
        select_target: "لطفاً یک مخاطب برای ادغام انتخاب کنید",
        success: "مخاطبین با موفقیت ادغام شدند",
        target_contact: "مخاطب مقصد (نگه داشته می‌شود)",
        title: "ادغام مخاطب",
        warning_description:
          "همه داده‌ها به مخاطب دوم منتقل می‌شود. این عمل قابل بازگشت نیست.",
        warning_title: "هشدار: عملیات مخرب",
        what_will_be_merged: "مواردی که ادغام می‌شوند:",
      },
      filters: {
        before_last_month: "قبل از ماه گذشته",
        before_this_month: "قبل از این ماه",
        before_this_week: "قبل از این هفته",
        managed_by_me: "مدیریت‌شده توسط من",
        search: "جستجوی نام، شرکت...",
        this_week: "این هفته",
        today: "امروز",
        tags: "برچسب‌ها",
        tasks: "وظایف",
      },
      hot: {
        empty_change_status:
          "با افزودن یادداشت به یک مخاطب و کلیک روی «نمایش گزینه‌ها» وضعیت آن را تغییر دهید.",
        empty_hint: "مخاطبین با وضعیت «داغ» اینجا نمایش داده می‌شوند.",
        title: "مخاطبین داغ",
      },
    },
    deals: {
      name: "معامله |||| معاملات",
      fields: {
        name: "نام",
        description: "توضیحات",
        company_id: "شرکت",
        contact_ids: "مخاطبین",
        category: "دسته‌بندی",
        amount: "بودجه",
        expected_closing_date: "تاریخ مورد انتظار برای بسته شدن",
        stage: "مرحله",
      },
      action: {
        back_to_deal: "بازگشت به معامله",
        create: "ایجاد معامله",
        new: "معامله جدید",
      },
      field_categories: {
        misc: "متفرقه",
      },
      filters: {
        only_mine: "فقط معاملات من",
      },
      archived: {
        action: "بایگانی",
        error: "خطا: معامله بایگانی نشد",
        list_title: "معاملات بایگانی‌شده",
        success: "معامله بایگانی شد",
        title: "معامله بایگانی‌شده",
        view: "مشاهده معاملات بایگانی‌شده",
      },
      inputs: {
        linked_to: "مرتبط با",
      },
      unarchived: {
        action: "بازگرداندن به تابلو",
        error: "خطا: معامله از بایگانی خارج نشد",
        success: "معامله از بایگانی خارج شد",
      },
      updated: "معامله به‌روزرسانی شد",
      empty: {
        before_create: "قبل از ایجاد معامله.",
        description: "به نظر می‌رسد فهرست معاملات خالی است.",
        title: "معامله‌ای یافت نشد",
      },
      invalid_date: "تاریخ نامعتبر",
    },
    notes: {
      name: "یادداشت |||| یادداشت‌ها",
      forcedCaseName: "یادداشت",
      fields: {
        status: "وضعیت",
        date: "تاریخ",
        attachments: "پیوست‌ها",
        contact_id: "مخاطب",
        deal_id: "معامله",
      },
      action: {
        add: "افزودن یادداشت",
        add_first: "نخستین یادداشت خود را اضافه کنید",
        delete: "حذف یادداشت",
        edit: "ویرایش یادداشت",
        update: "به‌روزرسانی یادداشت",
        add_this: "افزودن این یادداشت",
      },
      sheet: {
        create: "ایجاد یادداشت",
        create_for: "ایجاد یادداشت برای %{name}",
        edit: "ویرایش یادداشت",
        edit_for: "ویرایش یادداشت برای %{name}",
      },
      deleted: "یادداشت حذف شد",
      empty: "هنوز یادداشتی وجود ندارد",
      author_added: "%{name} یک یادداشت اضافه کرد",
      you_added: "شما یک یادداشت اضافه کردید",
      me: "من",
      list: {
        error_loading: "خطا در بارگذاری یادداشت‌ها",
      },
      note_for_contact: "یادداشت برای %{name}",
      stepper: {
        hint: "به صفحه یک مخاطب بروید و یادداشت اضافه کنید",
      },
      added: "یادداشت اضافه شد",
      inputs: {
        add_note: "افزودن یادداشت",
        options_hint: "(پیوست فایل یا تغییر جزئیات)",
        show_options: "نمایش گزینه‌ها",
      },
      actions: {
        attach_document: "پیوست سند",
      },
      validation: {
        note_or_attachment_required: "یادداشت یا پیوست الزامی است",
      },
    },
    sales: {
      name: "کاربر |||| کاربران",
      fields: {
        first_name: "نام",
        last_name: "نام خانوادگی",
        email: "ایمیل",
        administrator: "مدیر",
        disabled: "غیرفعال",
      },
      create: {
        error: "خطایی هنگام ایجاد کاربر رخ داد.",
        success:
          "کاربر ایجاد شد. به‌زودی ایمیلی برای تنظیم گذرواژه دریافت می‌کند.",
        title: "ایجاد کاربر جدید",
      },
      edit: {
        error: "خطایی رخ داد. لطفاً دوباره تلاش کنید.",
        record_not_found: "رکورد یافت نشد",
        success: "کاربر با موفقیت به‌روزرسانی شد",
        title: "ویرایش %{name}",
      },
      action: {
        new: "کاربر جدید",
      },
    },
    tasks: {
      name: "وظیفه |||| وظایف",
      forcedCaseName: "وظیفه",
      fields: {
        text: "توضیحات",
        due_date: "تاریخ سررسید",
        type: "نوع",
        contact_id: "مخاطب",
        due_short: "سررسید",
      },
      action: {
        add: "افزودن وظیفه",
        create: "ایجاد وظیفه",
        edit: "ویرایش وظیفه",
      },
      actions: {
        postpone_next_week: "موکول به هفته آینده",
        postpone_tomorrow: "موکول به فردا",
        title: "اقدامات وظیفه",
      },
      added: "وظیفه اضافه شد",
      deleted: "وظیفه با موفقیت حذف شد",
      dialog: {
        create: "ایجاد وظیفه",
        create_for: "ایجاد وظیفه برای %{name}",
      },
      sheet: {
        edit: "ویرایش وظیفه",
        edit_for: "ویرایش وظیفه برای %{name}",
      },
      empty: "هنوز وظیفه‌ای وجود ندارد",
      empty_list_hint: "وظایف افزوده‌شده به مخاطبین اینجا نمایش داده می‌شوند.",
      filters: {
        later: "بعداً",
        overdue: "معوق",
        this_week: "این هفته",
        today: "امروز",
        tomorrow: "فردا",
        with_pending: "با وظایف در انتظار",
      },
      regarding_contact: "(مربوط به %{name})",
      updated: "وظیفه به‌روزرسانی شد",
    },
    tags: {
      name: "برچسب |||| برچسب‌ها",
      action: {
        add: "افزودن برچسب",
        create: "ایجاد برچسب جدید",
      },
      dialog: {
        color: "رنگ",
        create_title: "ایجاد برچسب جدید",
        edit_title: "ویرایش برچسب",
        name_label: "نام برچسب",
        name_placeholder: "نام برچسب را وارد کنید",
      },
    },
  },
  crm: {
    action: {
      reset_password: "بازنشانی گذرواژه",
    },
    auth: {
      first_name: "نام",
      last_name: "نام خانوادگی",
      confirm_password: "تأیید گذرواژه",
      confirmation_required:
        "لطفاً برای تأیید حساب خود روی پیوندی که هم‌اکنون با ایمیل برای شما ارسال شد کلیک کنید.",
      recovery_email_sent:
        "اگر کاربر ثبت‌شده باشید، به‌زودی یک ایمیل بازیابی گذرواژه دریافت می‌کنید.",
      sign_in_failed: "ورود ناموفق بود.",
      sign_in_google_workspace: "ورود با گوگل ورک‌اسپیس",
      signup: {
        create_account: "ایجاد حساب",
        create_first_user:
          "برای تکمیل راه‌اندازی، نخستین حساب کاربری را ایجاد کنید.",
        creating: "در حال ایجاد...",
        initial_user_created: "کاربر اولیه با موفقیت ایجاد شد",
      },
      welcome_title: "به اتمیک CRM خوش آمدید",
    },
    common: {
      account_manager: "مدیر حساب",
      activity: "فعالیت",
      added: "اضافه شد",
      details: "جزئیات",
      last_activity_with_date: "آخرین فعالیت %{date}",
      load_more: "بارگذاری بیشتر",
      misc: "متفرقه",
      past: "گذشته",
      read_more: "بیشتر بخوانید",
      retry: "تلاش مجدد",
      show_less: "نمایش کمتر",
      copied: "کپی شد!",
      copy: "کپی",
      loading: "در حال بارگذاری...",
      me: "من",
      task_count: "%{smart_count} وظیفه |||| %{smart_count} وظیفه",
    },
    changelog: {
      title: "تغییرات نسخه",
    },
    activity: {
      added_company: "%{name} شرکت را اضافه کرد",
      you_added_company: "شما شرکت را اضافه کردید",
      added_contact: "%{name} اضافه کرد",
      you_added_contact: "شما اضافه کردید",
      added_note: "%{name} درباره یادداشتی اضافه کرد",
      you_added_note: "شما درباره یادداشتی اضافه کردید",
      added_note_about_deal: "%{name} درباره معامله یادداشتی اضافه کرد",
      you_added_note_about_deal: "شما درباره معامله یادداشتی اضافه کردید",
      added_deal: "%{name} معامله را اضافه کرد",
      you_added_deal: "شما معامله را اضافه کردید",
      at_company: "در",
      to: "به",
      load_more: "بارگذاری فعالیت بیشتر",
    },
    dashboard: {
      deals_chart: "درآمد معاملات آینده",
      deals_pipeline: "خط لوله معاملات",
      latest_activity: "آخرین فعالیت",
      latest_activity_error: "خطا در بارگذاری آخرین فعالیت",
      latest_notes: "آخرین یادداشت‌های من",
      latest_notes_added_ago: "%{timeAgo} پیش اضافه شد",
      stepper: {
        install: "نصب اتمیک CRM",
        progress: "%{step}/۳ انجام شد",
        whats_next: "قدم بعدی چیست؟",
      },
      upcoming_tasks: "وظایف آینده",
    },
    header: {
      import_data: "درون‌ریزی داده",
    },
    image_editor: {
      change: "تغییر",
      drop_hint: "فایلی را برای بارگذاری رها کنید یا برای انتخاب کلیک کنید.",
      editable_content: "محتوای قابل ویرایش",
      title: "بارگذاری و تغییر اندازه تصویر",
      update_image: "به‌روزرسانی تصویر",
    },
    import: {
      action: {
        download_error_report: "دانلود گزارش خطا",
        import: "درون‌ریزی",
        import_another: "درون‌ریزی فایل دیگر",
      },
      error: {
        unable: "درون‌ریزی این فایل امکان‌پذیر نیست.",
      },
      idle: {
        description_1:
          "می‌توانید فروش‌ها، شرکت‌ها، مخاطبین، یادداشت‌ها و وظایف را درون‌ریزی کنید.",
        description_2: "داده‌ها باید در یک فایل JSON مطابق نمونه زیر باشند:",
      },
      status: {
        all_success: "همه رکوردها با موفقیت وارد شدند.",
        complete: "درون‌ریزی کامل شد.",
        failed: "ناموفق",
        imported: "وارد شد",
        in_progress:
          "درون‌ریزی در حال انجام است، لطفاً از این صفحه خارج نشوید.",
        some_failed: "برخی رکوردها وارد نشدند.",
        table_caption: "وضعیت درون‌ریزی",
      },
      title: "درون‌ریزی داده",
    },
    settings: {
      about: "درباره",
      companies: {
        sectors: "حوزه‌های فعالیت",
      },
      dark_mode_logo: "لوگوی حالت تیره",
      deals: {
        categories: "دسته‌بندی‌ها",
        currency: "واحد پول",
        pipeline_help:
          "انتخاب کنید کدام مراحل معامله باید به‌عنوان معامله خط لوله محسوب شوند.",
        pipeline_statuses: "وضعیت‌های خط لوله",
        stages: "مراحل",
      },
      light_mode_logo: "لوگوی حالت روشن",
      notes: {
        statuses: "وضعیت‌ها",
      },
      reset_defaults: "بازنشانی به پیش‌فرض",
      save_error: "ذخیره تنظیمات ناموفق بود",
      saved: "تنظیمات با موفقیت ذخیره شد",
      saving: "در حال ذخیره...",
      tasks: {
        types: "نوع‌ها",
      },
      preferences: "ترجیحات",
      title: "تنظیمات",
      app_title: "عنوان برنامه",
      sections: {
        branding: "برندینگ",
      },
      validation: {
        duplicate: "%{display_name} تکراری: %{items}",
        in_use:
          "نمی‌توان %{display_name} که هنوز در معاملات استفاده می‌شوند را حذف کرد: %{items}",
        validating: "در حال اعتبارسنجی…",
        entities: {
          categories: "دسته‌بندی‌ها",
          stages: "مراحل",
        },
      },
    },
    theme: {
      dark: "تیره",
      label: "پوسته",
      light: "روشن",
      system: "سیستم",
    },
    language: "زبان",
    navigation: {
      label: "ناوبری CRM",
    },
    profile: {
      inbound: {
        description:
          "می‌توانید با افزودن آن به فیلد %{field} شروع به ارسال ایمیل به نشانی ورودی سرور خود کنید. اتمیک CRM ایمیل‌ها را پردازش کرده و یادداشت‌هایی به مخاطبین مربوطه اضافه می‌کند.",
        title: "ایمیل ورودی",
      },
      mcp: {
        title: "سرور MCP",
        description:
          "از این آدرس برای اتصال دستیار هوش مصنوعی خود به داده‌های CRM از طریق پروتکل زمینه مدل (MCP) استفاده کنید.",
      },
      password: {
        change: "تغییر گذرواژه",
      },
      password_reset_sent: "ایمیل بازنشانی گذرواژه به نشانی ایمیل شما ارسال شد",
      record_not_found: "رکورد یافت نشد",
      title: "پروفایل",
      updated: "پروفایل شما به‌روزرسانی شد",
      update_error: "خطایی رخ داد. لطفاً دوباره تلاش کنید",
    },
    validation: {
      invalid_url: "باید یک آدرس معتبر باشد",
      invalid_linkedin_url: "آدرس باید از linkedin.com باشد",
    },
  },
} satisfies CrmMessages;
